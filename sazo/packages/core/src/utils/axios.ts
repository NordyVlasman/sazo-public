import Axios from 'axios'
import { API_SECRET, LARAVEL_API_URL, LARAVEL_AUTH_URL } from "@sazo/configuration";
import { getCookie } from "cookies-next";

const axios = Axios.create({
    baseURL: LARAVEL_AUTH_URL,
    headers: {
        'Accept': 'application/json',
        'content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-API-SECRET': API_SECRET,
        'Authorization': `Bearer ${getCookie('access_token')}`
    },
})

export default axios
