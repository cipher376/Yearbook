

import { Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { SOCKET_ROOT_URL } from '../../config';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';



@Injectable()
export class PushSocket extends Socket {

    constructor() {
        super({
            url: SOCKET_ROOT_URL, options: {
                polling: {
                    extraHeaders: {
                        'x-clientid': 'abc',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            }
        });
    }

}


@Injectable()
export class PushSocketService {

    private pushSource = new Subject<string>();
    pushSource$ = this.pushSource.asObservable();


    /**
     *
     */
    constructor(private socket: PushSocket) {
        console.log(socket);
    }




    sendMessage(msg: string) {
        this.socket.emit('message', msg);
    }

    getMessage() {
        return this.socket
            .fromEvent<any>('message').pipe(map(data => {
                this.pushSource.next(data.message); // broadcast the message for subscription
                console.log(data);
                return data.msg;
            }));
    }

    close() {
        this.socket.disconnect();
    }


}