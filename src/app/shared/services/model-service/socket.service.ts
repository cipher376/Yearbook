import { UserService } from 'src/app/shared/services/model-service/user.service';


import { Injectable, NgModule, OnInit } from '@angular/core';
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
                auth: userService?.token?.token, // authenticate with the user token
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

    currentSocketId = '';
    retry: any;

    /**
     *
     */
    constructor(
        private socket: PushSocket,
        private userService: UserService) {

        this.userService.getUserLocal().then(user => {
            this.user = user;
            this.init();
        }, error => {
            this.init();
        });


    }

    // sendMessage(msg: string) {
    //     this.socket.emit('message', msg);
    // }

    // getMessage() {
    //     return this.socket
    //         .fromEvent<any>('message').pipe(map(data => {
    //             this.pushSource.next(data.message); // broadcast the message for subscription
    //             console.log(data);
    //             return data.msg;
    //         }));
    // }


    init() {

        /****
         * HANDLING EVENTS
         */

        /**
         * CONNECTION SUCCESSFUL
         */
        this.socket.on('connect', () => {
            this.currentSocketId = this.socket.ioSocket.id;
            clearInterval(this.retry);
            this.pushSubscription(); // subscribe to channels
            this.socket.on(`verification${this.socket.ioSocket.id}`, (remoteId) => {
                console.log('Verification remote:', remoteId);
                console.log('Verification local:', this.currentSocketId);
                setTimeout(() => {
                    if (this.currentSocketId === remoteId) {
                        // alert('verification request received');
                        // send user token
                        this.socket.emit(`verification${this.socket.ioSocket.id}`, {token: this.userService.token});
                    } else {
                        this.currentSocketId = '';
                        this.socket.disconnect();

                        console.log('hello');
                    }
                }, 2000);
            });
        });



        /*****
         * CONNECTION ERROR
         */
        this.socket.on('connect_error', (erro) => {
            console.log('Retrying');
            // console.log(erro);
            setTimeout(() => {
                this.socket.connect();
            }, 1000);
        });



        /**
         * CONNECTION TERMINATED
         */
        this.socket.on('disconnect', () => {
            console.log('Socket disconnected');
            this.socket.disconnect(true);
            this.retry = setInterval(() => {
                this.socket.connect();
            }, 5000); // retry after every 5seconds
        });



        this.socket.connect(); // Triggers first connection
    }



    pushSubscription() {
        const retry = setInterval(() => {
            console.log('Retrying to establish connection');
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
