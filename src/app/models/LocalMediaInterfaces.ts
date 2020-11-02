export interface PhotoLocal {
    id: string;
    photoNativeURL: string;
    thumbnailNativeURL: string;
    photoResolvedURL?: string;
    thumbnailResolvedURL?: string;
    fileName: string;
    creationDate: Date;
    base64data?: string;
    data?: string;
    dataBuffer?: ArrayBuffer;
    description?: string;
}

export interface VideoLocal {
    id: string;
    videoNativeURL: string;
    posterNativeURL: string;
    videoResolvedURL?: string;
    posterResolvedURL?: string;
    fileName: string;
    creationDate: Date;
    base64data?: string;
    data?: string;
    dataBuffer?: ArrayBuffer;
    description?: string;

}

export interface AudioLocal {
    id: string;
    audioNativeURL: string;
    posterNativeURL: string;
    audioResolvedURL?: string;
    posterResolvedURL?: string;
    fileName: string;
    creationDate: Date;
    base64data?: string;
    data?: string;
    dataBuffer?: ArrayBuffer;
    description?: string;
}