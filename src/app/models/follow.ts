import { User } from './user';

export interface FollowInterface {
    id?: any;
    leaderId?: any;
    followerId?: any;
    dateCreated?: Date;
    updatedAt?: Date;
    leader?: User;
    follower?: User;
}

export class Follow implements FollowInterface {
    id: any;
    leaderId: any;
    followerId: any;
    dateCreated: Date;
    leader: User;
    follower: User;
    constructor(data?: FollowInterface) {
        Object.assign(this, data);
    }
}