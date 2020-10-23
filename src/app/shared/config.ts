/****API Configurations */
// export const API_PORT = 8082;
// export const API_ROOT_URL = `http://devtek-limited.tech:${API_PORT || 80}`;

export const API_PORT = 3000;
export const API_ROOT_URL = `http://localhost:${API_PORT || 80}`;

/***
 * Default images for users and schools without profile photo
 */
export const SCHOOL_DEFAULT_PHOTO_URL = `${API_ROOT_URL}/media/download/school_default.png`;
export const NO_SCHOOL_COVER_PHOTO_URL = `${API_ROOT_URL}/media/download/school_default_cover.jpg`;
export const USER_DEFAULT_PHOTO_URL = `${API_ROOT_URL}/media/download/user_default.png`;
export const CREST_DEFAULT_PHOTO_URL = `${API_ROOT_URL}/media/download/crest_default.png`;
