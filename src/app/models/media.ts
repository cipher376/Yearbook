export const MEDIA_TYPE = [
  'Photo', 'Video', 'Audio', 'Document', 'Website'
];

export enum MediaType {
  PHOTO = 0,
  VIDEO = 1,
  AUDIO = 2,
  DOCUMENT = 3,
  WEBSITE = 4
}

export interface MediaInterface {
  id?: number;
  description?: string;
  fileName?: string;
  fileUrl?: string;
  coverUrl?: string;
  thumbnailUrl?: string;
  dateCreated?: Date;
  type: MediaType;
}

export class Media {
  id: number;
  description?: string;
  fileName?: string;
  fileUrl: string;
  thumbnailUrl?: string;
  coverUrl?: string;
  dateCreated?: Date;
  type: MediaType;

  /**
   *
   */
  constructor(private data?: MediaInterface) {
    this.id = data.id;
    this.description = data.description;
    this.fileName = data.fileName;
    this.fileUrl = data.fileUrl;
    this.thumbnailUrl = data.thumbnailUrl;
    this.coverUrl = data.coverUrl;
    this.dateCreated = data.dateCreated;
    this.type = data.type;
  }
}

export class Photo extends Media {
  /**
   *
   */
  constructor(data?: MediaInterface) {
    super(data);

  }
}
export class Video extends Media {
  /**
     *
     */
  constructor(data?: MediaInterface) {
    super(data);

  }
}
export class Audio extends Media {
  /**
     *
     */
  constructor(data?: MediaInterface) {
    super(data);

  }
}
export class Document extends Media {
  /**
     *
     */
  constructor(data?: MediaInterface) {
    super(data);

  }
}
export class Website extends Media {
  /**
     *
     */
  constructor(data?: MediaInterface) {
    super(data);

  }
}
