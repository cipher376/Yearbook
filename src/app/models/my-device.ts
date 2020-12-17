import { PushTopic } from "./push-topic";
import { User } from "./user";

export interface PushDeviceInterface {
    id?: any;
    token: string;
    playerId?: string;
    platform: string;
    uuid: string;
    userId?: any;
    user?: User;
    topics?: PushTopic[];
}

export class PushDevice implements PushDeviceInterface {
    id: any;
    token: string;
    playerId: string;
    platform: string;
    uuid: string;
    userId: any;
    user?: User;
    topics?: PushTopic[];
    constructor(data?: PushDeviceInterface) {
        Object.assign(this, data);
    }

}