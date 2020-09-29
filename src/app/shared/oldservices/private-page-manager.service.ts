// import { UploadPhotoPage } from '../../members/upload-photo/upload-photo.page';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { FPage } from '../../interfaces/interface';
// import { ModalController } from '@ionic/angular';
// import { AddAlbumPage } from '../../members/add-album/add-album.page';
// import { SignalService } from './signal.service';
// import { QrcodeImagePage } from '../../members/qrcode-image/qrcode-image.page';
// import { PayDialogPage } from '../../members/pay-dialog/pay-dialog.page';
// import { PhotoSelectorDialogPage } from '../../members/photo-selector-dialog/photo-selector-dialog.page';
// import { QrcodeScannerPage } from '../../members/qrcode-scanner/qrcode-scanner.page';
// // import { LocationInputPage } from '../members/location-input/location-input.page';

// @Injectable({
//   providedIn: 'root'
// })
// export class PrivatePageManagerService {
//   _pages = [''];
//   private _modal: HTMLIonModalElement;

//   private _acceptSource = new Subject<Boolean>();
//   _accept$ = this._acceptSource.asObservable();


//   constructor(public _modalCtrl: ModalController,
//     private _signalSource: SignalService) {

//     // subscribe to close modal signal
//     this._signalSource.closeModal$.subscribe(() => {
//       if (this._modal) {
//         this._modal.dismiss();
//       }

//     });

//   }

//   // Provide details about the current page
//   // Components subscribe to it to know how to control
//   // html elements: eg. to hide a menu
//   private _currentPageSource = new Subject<FPage>();
//   _currentPageState$ = this._currentPageSource.asObservable();
//   announceCurrentPage(page: FPage) {
//     this._currentPageSource.next(page);
//   }

//   /***** Add new Album ******* */
//   async addAlbumPage() {
//     // this._addAlbumSource.next(true);
//     this._modalCtrl.create({
//       component: AddAlbumPage,
//       cssClass: ''
//     }).then((modal) => {
//       modal.present();
//       this._modal = modal;
//     });

//   }


//   /***** View Album Albums ******* */
//   // async viewAlbumsPage() {
//   //   this._modalCtrl.create({
//   //     component: ViewAlbumsPage,
//   //     cssClass: ''
//   //   }).then((modal) => {
//   //     modal.present();
//   //     this._modal = modal;
//   //   });
//   // }

//   /***** Upload Photo ******* */
//   async uploadPhotoPage() {
//     this._modalCtrl.create({
//       component: UploadPhotoPage,
//       cssClass: ''
//     }).then((modal) => {
//       modal.present();
//       this._modal = modal;
//     });
//   }

//   /*********QR Code Image Auth Page******/
//   async openQrcodeImage() {
//     this._modalCtrl.create({
//       component: QrcodeImagePage,
//       cssClass: ''
//     }).then((modal) => {
//       modal.present();
//       this._modal = modal;
//     });
//   }

//   /*********Make Payment Page******/
//   async addPayDialog() {
//     this._modalCtrl.create({
//       component: PayDialogPage,
//       cssClass: ''
//     }).then((modal) => {
//       modal.present();
//       this._modal = modal;
//     });
//   }

//   /*********Select photo from album******/
//   async photoSelectorDialog() {
//     this._modalCtrl.create({
//       component: PhotoSelectorDialogPage,
//       cssClass: ''
//     }).then((modal) => {
//       modal.present();
//       this._modal = modal;
//     });
//   }

//   /*********Select photo from album******/
//   async qrCodeScannerDialog() {
//     this._modalCtrl.create({
//       component: QrcodeScannerPage,
//       cssClass: ''
//     }).then((modal) => {
//       modal.present();
//       this._modal = modal;
//     });
//   }

//   /*********Get google map location******/
//   // async locationInputDialog() {
//   //   this._modalCtrl.create({
//   //     component: LocationInputPage,
//   //     cssClass: ''
//   //   }).then((modal) => {
//   //     modal.present();
//   //     this._modal = modal;
//   //   });
//   // }

//   /*******Annouce action acceptance */
//   announceAcceptance(accept: Boolean) {
//     this._acceptSource.next(accept);
//   }

// }
