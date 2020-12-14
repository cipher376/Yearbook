import { User } from 'src/app/models/user';
import { Post } from './post';
export interface ShareableInterface {
    message: string;
    subject: string;
    image?: string;
    url?: string;
    emailRecipients?: string[];
}

export class Shareable implements ShareableInterface {
    message: string;
    subject: string;
    image?: string;
    url?: string;
    emailRecipients?: string[];
    constructor(data?: ShareableInterface) {
        Object.assign(this, data);
    }

}