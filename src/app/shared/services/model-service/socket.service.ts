import { UserService } from 'src/app/shared/services/model-service/user.service';


import { Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { SOCKET_ROOT_URL } from '../../config';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';



@Injectable()
export class PushSocket extends Socket {
    user: User;

    constructor(
        private userService: UserService
    ) {
        super({
            url: SOCKET_ROOT_URL, options: {
                withCredentials: true,
                polling: {
                    extraHeaders: {
                        'x-clientid': 'abc', // TODO: set client id with phone id
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

    user: User;
    channelIds = ['1', '2', '3'];
    /**
     *
     */
    constructor(
        private socket: PushSocket,
        private userService: UserService) {

        console.log(socket);
        this.connect();

        this.userService.getUserLocal().then(user => {
            this.user = user;
        });


        this.pushSubscription(); // start subscriptions
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

    connect() {
        this.socket.connect();
    }

    close() {
        this.socket.disconnect();
    }

    pushSubscription() {
        const retry = setInterval(() => {
            console.log('Retrying to establish connection')
            if (this.socket.ioSocket.readyState !== 'open') {
                this.channelIds.forEach(ch => {
                    this.socket.ioSocket.on(ch, () => {
                        console.log('Listening on channel: ', ch);
                        this.socket.emit('1', ['adsfldf dfjlajf lkdsf']);
                    });
                });

                clearInterval(retry); // stop connecting
            }
        }, 5000); // retry after every 5seconds


    }


}
