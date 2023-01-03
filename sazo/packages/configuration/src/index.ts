const WEB_URL_PROD = "https://app.volcar.dev";
const WEB_URL_DEV = "http://localhost:3000";

const SITE_URL_PROD = "https://www.app.volcar.dev";
const SITE_URL_DEV = "http://sazo.nl";

export const IMGIX_DOMAIN = "https://annabel.imgix.net";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const API_COOKIE_NAME = "sazo_session"

export const SCOPE_COOKIE_NAME = "scope";

export const API_SECRET = process.env.BACKEND_API_SECRET;

export const COOKIE_URL = IS_PRODUCTION
    ? ".sazo.nl"
    : ".localhost";

export const WEB_URL = IS_PRODUCTION ? WEB_URL_PROD : WEB_URL_DEV;
export const SITE_URL = IS_PRODUCTION ? SITE_URL_PROD : SITE_URL_DEV;

export const LARAVEL_API_URL = IS_PRODUCTION
    ? "https://api.volcar.dev"
    : "http://localhost:8000/api";

export const LARAVEL_AUTH_URL = IS_PRODUCTION
    ? "https://api.volcar.dev"
    : "http://localhost:8000";


export const AVATAR_FALLBACK = "/img/user-avatar-fullback.png";

export const MAX_FILE_NUMBER = 10
export const MAX_FILE_SIZE = 1024 * 1024 * 400; // 20mb

/*
  Valid mimetypes tell the app what kind of files
  can be uploaded to S3 at all.
*/
export const VALID_MIMETYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
    "image/gif",
    "video/mp4",
    "video/quicktime",
    "origami",
];

/*
  Renderable mimetypes tell the app what should render
  as an attachment on a post view. This can only be images
  and videos right now, but it's not possible to natively
  render things like Origami files.
*/
export const RENDERABLE_MIMETYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
    "image/gif",
    "video/mp4",
    "video/quicktime",
];
