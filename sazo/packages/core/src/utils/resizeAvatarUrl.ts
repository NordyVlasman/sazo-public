import { AVATAR_FALLBACK, IMGIX_DOMAIN } from "@sazo/configuration";

export function getAttachmentUrl(url: string) {
    return `${IMGIX_DOMAIN}/${url}`;
}

export function resizeAttachmentUrl(url: string, type: string, width: number) {
    let imageUrl = url;

    if (!url) { return AVATAR_FALLBACK; }

    if (type === "image/png" || type === "image/jpeg" || type === "image/jpg") {
        imageUrl = `${url}?w=${width}&auto=compress&dpr=2`;
    }

    return imageUrl;
}

export function resizeAvatarUrl(url: string) {
    let imageUrl = url;
    if (!url) { return AVATAR_FALLBACK }
    imageUrl = `${url}?w=100&h=100&fit=crop`

    return imageUrl
}
