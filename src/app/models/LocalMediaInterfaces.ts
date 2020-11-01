export interface PhotoLocal {
    id: string;
    photoNativeURL: string;
    thumbnailNativeURL: string;
    photoResolvedURL?: string;
    thumbnailResolvedURL?: string;
    fileName: string;
    creationDate: Date;
    base64data?: string;
}