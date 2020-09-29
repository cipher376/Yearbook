// import { Injectable } from '@angular/core';
// import { MyFileService } from './my-file.service';
// import { FStorageService } from 'src/app/providers/f-storage.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class PermissionsService {

//   constructor(private _fileSevx: MyFileService, private _fstore: FStorageService) {
//     this.initPermissions();
//   }

//   initPermissions() {
//     this._fstore.get('permissions_loaded').then(isLoaded => {
//       if (!isLoaded) {
//         // request for permission
//         this.cameraPermission();
//         this._fstore.set('permissions_loaded', true).then(_ => _);
//       }
//     });
//   }

//   // Trigger camera permission
//   cameraPermission() {
//     this._fileSevx.takePicture();
//   }

// }
