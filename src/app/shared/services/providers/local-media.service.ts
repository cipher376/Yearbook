import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Injectable } from '@angular/core';
import { MyStorage } from './storage/my-storage.service';
import { Plugins, FilesystemDirectory, FilesystemEncoding, ReaddirOptions } from '@capacitor/core';
import { File, FileEntry } from '@ionic-native/file/ngx';

const { Filesystem } = Plugins;
@Injectable({
    providedIn: 'root',
})
export class LocalMediaService {
    redirectUrl = '';

    constructor(
        private store: MyStorage,
        private photoLibrary: PhotoLibrary,
        private file: File) {

    }


   


}
