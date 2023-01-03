import {useRouter} from "next/router";

export function useGetUsername() {
    const router = useRouter()
    return router.query.username;
}
