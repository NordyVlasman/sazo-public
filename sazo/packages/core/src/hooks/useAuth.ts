import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from "../utils/axios";
import { getCookie, removeCookies, setCookie } from "cookies-next";
import { cookies } from "next/headers";

export const useAuth = ({ middleware, redirectIfAuthenticated }: any = {}) => {
    const router = useRouter()

    const token = getCookie('access_token')

    const { data: user, error, mutate } = useSWR('/api/v1/me', () =>
        axios
            .get('/api/v1/me', {
              headers: {
               'Authorization': `Bearer ${getCookie('access_token')}`
              }
            })
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const register = async ({ setErrors, ...props }) => {

        setErrors([])

        axios
            .post('/api/auth/signup', props)
            .then(res => {
              if (res.data.accessToken) {
                setCookie('access_token', res.data.accessToken, {
                  sameSite: "strict"
                })
                mutate()
              }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        setErrors([])
        setStatus(null)

        axios
            .post('/api/auth/signin', props)
            .then(res => {
              if (res.data.accessToken) {
                setCookie('access_token', res.data.accessToken, {
                  sameSite: "strict"
                })
                mutate()
              }
            })
            .catch(error => {
                if (error.response?.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        setErrors([])
        setStatus(null)

        axios
            .post('/api/auth/reset-password', { token: router.query.token, ...props })
            .then(response => router.push('/login?reset=' + btoa(response.data.status)))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (! error) {
            await axios
                .post('/api/v1/auth/logout', null, {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                .then(() => mutate())
        }
        removeCookies('access_token')
        window.location.pathname = '/auth/signin'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (window.location.pathname === "/verify-email" && user?.email_verified_at) router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
