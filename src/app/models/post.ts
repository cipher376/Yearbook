import { Photo, Video, Audio } from './my-media';


export interface PostConfig {
    isEvent: boolean;
    isAnnouncement: boolean;
    isPrivate: boolean;
}

export interface PostInterface {
    id: number;
    title?: string;
    message: string;
    userId: number;
    schoolId?: number;
}

export class Post {

    id: number;
    title?: string;
    message: string;
    userId: number;
    schoolId?: number;

    photos?: Photo[] = [];
    audios?: Audio[] = [];
    videos?: Video[] = [];
    documents?: Document[] = [];

    postConfig?: PostConfig;

    /**
     *
     */
    constructor(
        private data?: PostInterface
    ) {
        this.id = data?.id;
        this.title = data?.title;
        this.message = data?.message;
        this.userId = data?.userId;
        this.schoolId = data?.schoolId;

    }
}