// import { Injectable } from '@angular/core';
// import { FCMDeviceApi } from '../sdk/services/custom/FCMDevice';
// import { FCMDevice, FameIdentity } from '../sdk';
// import { catchError, map } from 'rxjs/operators';
// import { throwError } from 'rxjs';
// import { FStorageService } from '../../providers/f-storage.service';
// import { Device } from '@ionic-native/device/ngx';
// import { MY_NotifyObject, NOTIFY_TYPES } from '../../interfaces/interface';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
// import { AlertController } from '@ionic/angular';
// import { FCM } from '@ionic-native/fcm/ngx';
// import { SignalService, MY_ACTION } from './signal.service';
// import { ChatService } from './chatService';
// import { Router } from '@angular/router';
// import { ToasterService } from 'src/app/providers/toaster.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class FCMBackendService {
//   _identity: FameIdentity;
//   constructor(private _deviceApi: FCMDeviceApi,
//     private _device: Device,
//     private _fstore: FStorageService,
//     private _oneSignal: OneSignal,
//     public _alert: AlertController,
//     private _signal: SignalService,
//     private _chatSvx: ChatService,
//     private _router: Router,
//     private _toaster: ToasterService
//   ) {
//     this._fstore.getObject('user').then(id => {
//       this._identity = id;
//       if (id) {
//         this._fstore.getObject('oneSignalIsUp').then(isUp => {
//           console.log(isUp);
//           if (!isUp) {
//             this.setupOneSignal().then(_ => _);
//           }

//         });

//       }
//     });
//   }

//   createUserDevice(token: string, playerId = '') {
//     const my_device = new FCMDevice();
//     my_device.platform = this._device.platform;
//     my_device.uuid = this._device.uuid;
//     my_device.token = token;
//     my_device.playerId = playerId;
//     return this._deviceApi.patchOrCreate(my_device).pipe(
//       map(res => {
//         console.log(res);
//         if (res) {
//           this.updateUserDevicesLocal();
//         }
//         return res;
//       }),
//       catchError((e) => this.handleError(e))
//     );
//   }

//   async updateDevicePlayerId(playerId: any) {
//     const my_device = await this.findThisDevice();
//     if (my_device && playerId) {
//       // update existing device
//       return this._deviceApi.patchAttributes(my_device.id, { playerId: playerId }).pipe(
//         map(res => {
//           console.log(res);
//           return res;
//         }),
//         catchError((e) => this.handleError(e))
//       );
//     }
//   }

//   async updateDeviceToken(identityId: any, token: string, playerId = '') {
//     this.findThisDevice().then(my_device => {
//       if (my_device) {
//         // update existing device
//         this._deviceApi.patchAttributes(my_device.id, { token: token, playerId: playerId }).pipe(
//           map(res => {
//             console.log(res);
//             return res;
//           }),
//           catchError((e) => this.handleError(e))
//         ).subscribe(_ => _);
//       } else {
//         // new device so add to the user
//         my_device = new FCMDevice();
//         my_device.platform = this._device.platform;
//         my_device.uuid = this._device.uuid;
//         my_device.token = token;
//         my_device.playerId = playerId;
//         my_device.fameIdentityId = identityId;
//         this._deviceApi.patchOrCreate(my_device).pipe(
//           map(res => {
//             console.log(res);
//             return res;
//           }),
//           catchError((e) => this.handleError(e))
//         ).subscribe(_ => _);
//       }
//     })
//   }

//   async findThisDevice() {
//     this._identity = await this._fstore.getObject('user');
//     if (this._identity.fcmDevices && this._identity.fcmDevices.length > 0) {
//       // User already have devices so lets updated
//       // search for this particular device
//       let my_device: FCMDevice;
//       for (const device of this._identity.fcmDevices) {
//         if (device.uuid === this._device.uuid) {
//           // device found, update the user device information
//           my_device = device;
//           console.log(my_device);
//           break;
//         }
//       }
//       return my_device;
//     }
//   }

//   deleteDevice(deviceId: string) {
//     return this._deviceApi.deleteById(deviceId).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       }),
//       catchError((e) => this.handleError(e))
//     );
//   }

//   updateUserDevicesLocal() {
//     // update the local identity objects with the new device
//     if (this._identity) {

//       const filter = {
//         where: {
//           fameIdentityId: this._identity.id
//         },
//         include: {
//           relation: 'topics'
//         }
//       };
//       this._deviceApi.find(filter).subscribe((devices: FCMDevice[]) => {
//         this._identity.fcmDevices = devices;
//         this._fstore.setObject('user', this._identity).then(_ => _);
//       });
//     }
//   }

//   async saveNotificationLocal(notify: MY_NotifyObject) {
//     // get existing notifications
//     const notifications: MY_NotifyObject[] = await this._fstore.getObject('notifications');
//     if (notifications) {
//       notifications.unshift(notify);
//       this._fstore.setObject('notifications', notifications).then(_ => _);
//     } else {
//       // first time
//       this._fstore.setObject('notifications', [notify]).then(_ => _);
//     }
//   }

//   async getNotificationsLocal() {
//     const notifications: MY_NotifyObject[] = await this._fstore.getObject('notifications');
//     if (notifications) {
//       return notifications;
//     }
//     return [];
//   }
//   async deleteNotificationLocal(noToDelete: MY_NotifyObject) {
//     const notifications: MY_NotifyObject[] = await this._fstore.getObject('notifications');
//     let filtered: MY_NotifyObject[] = [];
//     if (notifications) {
//       filtered = notifications.filter(not => {
//         if ((not._message !== noToDelete._message) && (not._time !== noToDelete._time)) {
//           return not;
//         }
//       });
//     }
//     this._fstore.setObject('notifications', filtered).then(_ => _);
//     return filtered;
//   }

//   async clearAllNotificationsLocal() {
//     this._fstore.remove('notifications').then(_ => _);
//   }


//   async setupOneSignal() {
//     this._oneSignal.startInit('5e69063c-7ab9-4205-9823-6159ba30a8e2', '514730217551');

//     // Todo: Move to settings
//     this._oneSignal.enableSound(true);
//     this._oneSignal.enableVibrate(true);
//     this._oneSignal.setLogLevel({
//       logLevel: 6,
//       visualLevel: 0
//     }); // verborse on console but not alerts
//     this._oneSignal.setRequiresUserPrivacyConsent(true); // ask permission from user
//     this._oneSignal.provideUserConsent(true);

//     //
//     this._oneSignal.inFocusDisplaying(this._oneSignal.OSInFocusDisplayOption.InAppAlert); // Controls notif alert
//     this._oneSignal.promptLocation(); // Prompt user for geolocation
//     // this._oneSignal.setExternalUserId(this._identity.id + '');

//     // this._oneSignal.inFocusDisplaying(this._oneSignal.OSInFocusDisplayOption.InAppAlert);
//     this._oneSignal.handleNotificationReceived().subscribe((data) => {
//       if (data && data.payload && data.payload.additionalData) {
//         console.log(parseInt(data.payload.additionalData.notType));
//         if (parseInt(data.payload.additionalData.notType) === NOTIFY_TYPES.new_event) {
//           const notify = new MY_NotifyObject();
//           const remoteData = data.payload.additionalData;
//           notify._title = remoteData.title;
//           notify._message = data.payload.body;
//           notify._time = new Date(Date.now());
//           notify._data = remoteData;
//           notify._type = NOTIFY_TYPES.new_event;
//           notify._isRead = false;
//           notify._imageUrl = remoteData.imgUrl;
//           console.log(notify);
//           this.saveNotificationLocal(notify).then(_ => {
//             this._signal.sendAction(MY_ACTION.reloadNotifications);
//           });
//         } else if (parseInt(data.payload.additionalData.notType) === NOTIFY_TYPES.private_chat_request) {

//           this._alert.create({
//             header: 'Confirm!',
//             message: data.payload.body,
//             buttons: [
//               {
//                 text: 'Ignore',
//                 role: 'cancel',
//                 cssClass: 'secondary',
//                 handler: () => {
//                   if (data.payload.additionalData) {
//                     // delete room
//                     this._chatSvx.deleteRoomByChannel(data.payload.additionalData.channelId);
//                   }
//                 }
//               },
//               {
//                 text: 'Accept',
//                 handler: () => {
//                   const notify = new MY_NotifyObject();
//                   const remoteData = data.payload.additionalData;
//                   notify._title = remoteData.title;
//                   notify._message = data.payload.body;
//                   notify._time = new Date(Date.now());
//                   notify._data = remoteData;
//                   notify._type = NOTIFY_TYPES.private_chat_request;
//                   notify._isRead = false;
//                   console.log(notify);

//                   // add to local notifications
//                   this.saveNotificationLocal(notify).then(_ => _);

//                   // Broadcast incomming channel ID
//                   this._router.navigate(['/chat-private', { channelId: remoteData.channelId }]);
//                 }
//               }
//             ]
//           }).then(alert => alert.present());

//         } else if (parseInt(data.payload.additionalData.notType) === NOTIFY_TYPES.private_chat_message) {
//           const notify = new MY_NotifyObject();
//           const remoteData = data.payload.additionalData;
//           notify._title = remoteData.title;
//           notify._message = data.payload.body;
//           notify._time = new Date(Date.now());
//           notify._data = remoteData;
//           notify._type = NOTIFY_TYPES.private_chat_request;
//           notify._isRead = false;

//           // get current messages from server
//           this._chatSvx.getUserRooms(this._identity.fameUser.id).subscribe(_ => _).unsubscribe();
//           console.log(notify);

//         } else if (parseInt(data.payload.additionalData.notType) === NOTIFY_TYPES.private_chat_channel_open) {
//           const notify = new MY_NotifyObject();
//           const remoteData = data.payload.additionalData;
//           notify._title = remoteData.title;
//           notify._message = data.payload.body;
//           notify._time = new Date(Date.now());
//           notify._data = remoteData;
//           notify._type = NOTIFY_TYPES.private_chat_request;
//           notify._isRead = false;
//           console.log(notify);

//           // get current messages from server
//           // this._chatSvx.getUserRooms(this._identity.fameUser.id).subscribe(_ => _).unsubscribe();

//           // Save notification
//           this.saveNotificationLocal(notify).then(_ => {
//             this._signal.sendAction(MY_ACTION.reloadNotifications);
//           });


//           // this._chatSvx.receiveMessage(remoteData.channelId).subscribe(data => {
//           //   this._toaster.toast(data.message);
//           // });


//         } else if (parseInt(data.payload.additionalData.notType) === NOTIFY_TYPES.friend_request) {
//           const notify = new MY_NotifyObject();
//           const remoteData = data.payload.additionalData;
//           notify._title = remoteData.title;
//           notify._message = data.payload.body;
//           notify._time = new Date(Date.now());
//           notify._data = remoteData;
//           notify._type = NOTIFY_TYPES.private_chat_request;
//           notify._isRead = false;
//           console.log(notify);

//           // get current messages from server
//           // this._chatSvx.getUserRooms(this._identity.fameUser.id).subscribe(_ => _).unsubscribe();

//         }
//       }
//     });

//     this._oneSignal.handleNotificationOpened().subscribe((data) => {
//       // do something when a notification is opened
//       // this._toaster.toast('I\'m here');
//       // this._toaster.toast(JSON.stringify(data));
//     });

//     this._oneSignal.getIds().then(data => {
//       console.log(JSON.stringify(data));
//       if (data && this._identity) {
//         this.updateDeviceToken(this._identity.id, data.pushToken, data.userId).then(_ => _);
//       }
//     });

//     this._oneSignal.endInit();
//     this._fstore.setObject('oneSignalIsUp', true).then(_ => _);
//   }






//   /*************************Error Handlers**************************************** */
//   private handleError(e: any): any {
//     console.log(e);
//     let msg = '';
//     if (e.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', e.error.message);
//       console.log('No connection');
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${e.status}, ` +
//         `body was: ${e.code}`);
//     }

//     if (JSON.stringify(e).indexOf('Server') >= 0) {
//       msg = 'No connection ';
//     } else {
//       msg = 'System error, please report to: antiamoah890@gmail.com';
//     }
//     // return an observable with a user-facing error message
//     return throwError(msg);
//   }
// }
