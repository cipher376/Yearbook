import { MyStorage } from './storage/my-storage.service';
import { Injectable } from '@angular/core';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';

@Injectable({
    providedIn: 'root'
})
export class PermissionsService {

    constructor(
        private store: MyStorage,
        private photoLibrary: PhotoLibrary
    ) {
        this.initPermissions().then(_ => _);
    }

    async initPermissions() {
        // this.store.get('permissions_loaded').then(isLoaded => {
        //     if (!isLoaded) {
        //         // request for permission
        //         this.store.set('permissions_loaded', true).then(_ => _);
        //     }
        // });

        // Don't request for permissions again
        if (await this.isPermissions) {
            return;
        }
        this.getCameraPermission();
        this.getStorageDeviceAccessPermission();
        this.getLocationPermission();
        await this.getPhotolibraryPermission();

    }

    async isPermissions() {
        if (await this.store.get('permissions_loaded')) {
            return true;
        }
        return false;
    }

    // Trigger camera permission
    getCameraPermission() {
        // this._fileSevx.takePicture();
    }

    getStorageDeviceAccessPermission() {

    }

    getLocationPermission() {

    }
    async getPhotolibraryPermission() {
       await this.photoLibrary.requestAuthorization().then(_ => _)
            .catch(e => { console.log('Access denied to access photo library'); });
    }

}
