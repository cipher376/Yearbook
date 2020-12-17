export interface PushMessageInterface {
    id?: any;
    receivers: string[];
    sender: string[];
    body: string;
    subject: string;
    dateCreated: Date;
    file: string;
    fileUrls: string[];
    topicId?: any;
}



export class PushMessage implements PushMessageInterface {
    id: any;
    receivers: string[];
    sender: string[];
    body: string;
    subject: string;
    dateCreated: Date;
    file: string;
    fileUrls: string[];
    topicId: any;
    constructor(data?: PushMessageInterface) {
        Object.assign(this, data);
    }

}