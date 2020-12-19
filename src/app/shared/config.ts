/****API Configurations */
// export const API_PORT = 8082;
// export const API_ROOT_URL = `http://devtek-limited.tech:${API_PORT || 80}`;

export const API_PORT = 3001;
export const API_ROOT_URL = `http://localhost:${API_PORT ?? 80}`;

export const SOCKET_PORT = 3000;
export const SOCKET_ROOT_URL = `http://localhost:${SOCKET_PORT }`;

// export const API_PORT = 3000;
// export const API_ROOT_URL = `http://192.168.0.101:${API_PORT || 80}`;

/***
 * Default images for users and schools without profile photo
 */
export const SCHOOL_DEFAULT_PHOTO_URL = `${API_ROOT_URL}/media/download/school_default.png`;
export const NO_SCHOOL_COVER_PHOTO_URL = `${API_ROOT_URL}/media/download/school_cover.svg`;
export const USER_DEFAULT_PHOTO_URL = `${API_ROOT_URL}/media/download/user_default.svg`;
export const CREST_DEFAULT_PHOTO_URL = `${API_ROOT_URL}/media/download/school_crest.svg`;
export const USER_DEFAULT_COVER_URL = '';


export const SERVER_UPLOAD_PATH = '/media/upload/';
export const SERVER_DOWNLOAD_PATH = '/media/download/';
export const UPLOAD_URL = API_ROOT_URL + SERVER_UPLOAD_PATH;
export const DOWNLOAD_CONTAINER = API_ROOT_URL + SERVER_DOWNLOAD_PATH;

export const DEFAULT_AUDIO_COVER = API_ROOT_URL + SERVER_DOWNLOAD_PATH + 'audio_cover.png';
export const DEFAULT_AUDIO_ICON = API_ROOT_URL + SERVER_DOWNLOAD_PATH + 'audioIcon.jpg';

export const DEFAULT_DOCUMENT_COVER = API_ROOT_URL + SERVER_DOWNLOAD_PATH + 'document_cover.png';

