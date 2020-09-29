// import { Injectable } from '@angular/core';
// import { LatLng } from '@ionic-native/google-maps/ngx';
// import { FameIdentity } from '../sdk';
// import { Subject } from 'rxjs/Subject';

// export enum MY_ACTION {
//   hideHomeTabs = 1,
//   showHomeTabs = 2,
//   closeMenu = 3,
//   closePopOver = 4,
//   userEventBookmarksReload = 5,
//   reloadNotifications = 6,
//   reloadFriends = 7,
//   reloadFollows = 8,
//   reloadChatRooms = 9,
//   userEventReloaded = 10,
//   userAlbumsReloaded = 11,
//   newFocusUser = 12,
//   reloadUserEvents = 13,
//   refreshForNewTicket = 14,
//   reloadUserEventBookmarks = 15,
//   gmapLoadComplete = 16,
//   reloadUserImages = 18,
//   eventUnliked = 19
// }


// @Injectable({
//   providedIn: 'root'
// })
// export class SignalService {
//   private _actionSource = new Subject<MY_ACTION>();
//   _action$ = this._actionSource.asObservable();

//   private _qrScanSource = new Subject<string>();
//   _qrScan$ = this._qrScanSource.asObservable();

//   private _gmapCordSource = new Subject<LatLng>();
//   _gmapCord$ = this._gmapCordSource.asObservable();

//   private _identitySource = new Subject<FameIdentity>();
//   _identity$ = this._identitySource.asObservable();

//   private _newChatChannelSource = new Subject<string>();
//   _newChatChannel$ = this._newChatChannelSource.asObservable();

//   private _newChatRequestSource = new Subject<string>();
//   _newChatRequest$ = this._newChatRequestSource.asObservable();



//   /*******Close modal signal********/
//   private _closeModalSource = new Subject<boolean>();
//   closeModal$ = this._closeModalSource.asObservable();
//   closeModal(close: boolean) {
//     this._closeModalSource.next(true);
//   }


//   sendAction(action: MY_ACTION) {
//     this._actionSource.next(action);
//   }

//   qrScanComplete(code: string) {
//     this._qrScanSource.next(code);
//   }

//   newGmapCordinate(cordinate: LatLng) {
//     this._gmapCordSource.next(cordinate);
//   }

//   newUserIdentity(identity: FameIdentity) {
//     this._identitySource.next(identity);
//   }

//   incommingNewChatChannel(channelId: string) {
//     this._newChatChannelSource.next(channelId);
//   }


// }
