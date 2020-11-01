import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { MySignals } from 'src/app/shared/services/my-signals';
import { FilePath } from '@ionic-native/file-path/ngx';
import { throwError } from 'rxjs';
import { Platform } from '@ionic/angular';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Injectable } from '@angular/core';
import { MyStorage } from './storage/my-storage.service';
import { Capacitor, CameraResultType, Plugins, FilesystemDirectory, FilesystemEncoding, ReaddirOptions, FileWriteOptions, CameraOptions, CameraSource } from '@capacitor/core';
import { Entry, File, FileEntry, FileSaver, IWriteOptions } from '@ionic-native/file/ngx';
import { PhotoLocal } from 'src/app/models/LocalMediaInterfaces';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
// import { Media, MediaObject } from '@ionic-native/media/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { VideoRecorderCamera, VideoRecorderPreviewFrame } from '@teamhive/capacitor-video-recorder';


const { Camera, Filesystem } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class LocalMediaService {
  redirectUrl = '';
  mediaFolderName = 'media';
  mediaPath = '';
  mediaFullPath = '';

  constructor(
    private store: MyStorage,
    private photoLibrary: PhotoLibrary,
    private file: File,
    private platform: Platform,
    private filePath: FilePath,
    private signals: MySignals,
    private mediaCapture: MediaCapture,
    private streamingMedia: StreamingMedia,
    private photoViewer: PhotoViewer,
    private androidPermissions: AndroidPermissions
  ) {
    this.mediaPath = this.file.dataDirectory;
    this.mediaFullPath = this.mediaPath + this.mediaFolderName;

    this.createMediaDirectory().then(results => {
      console.log('Media directory created');
      console.log(results)
    }).catch(e => console.error('Media directory creation failed'));

    this.getPermissions().then(_ => _).catch(error => {
      console.log(error);
    });
  }

  async getPermissions() {
    try {
      if (!(await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA)).hasPermission) {
        await this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
      }
    } catch (error) {

    }

    // if (!(await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA)).hasPermission) {
    //   await this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
    // }
  }

  learnFilePaths() {
    // this.signals.log(this.file.applicationDirectory); //1
    // this.signals.log(this.file.applicationStorageDirectory);//2
    // this.signals.log(this.file.cacheDirectory);//3
    // this.signals.log(this.file.dataDirectory);//4
    // this.signals.log(this.file.documentsDirectory);//5
    // this.signals.log(this.file.externalApplicationStorageDirectory);//6
    // this.signals.log(this.file.externalCacheDirectory);//7
    // this.signals.log(this.file.externalDataDirectory);//8
    // this.signals.log(this.file.externalRootDirectory);//9
    // this.signals.log(this.file.sharedDirectory);//10
    // this.signals.log(this.file.syncedDataDirectory);//11
    // this.signals.log(this.file.tempDirectory);//12
    // this.signals.log('');//13
    // this.signals.log('');//14

    // this.signals.log(await (await this.file.resolveDirectoryUrl(this.file.dataDirectory)).fullPath);//15
    // this.signals.log(await (await this.file.resolveDirectoryUrl(this.file.dataDirectory)).nativeURL);//16
    // this.signals.log(await (await this.file.resolveDirectoryUrl(this.file.dataDirectory)).toInternalURL());//17
    // this.signals.log(await (await this.file.resolveDirectoryUrl(this.file.dataDirectory)).toURL());//18

    // this.signals.log(ph.id);//19
    // this.signals.log(ph.photoNativeURL);//20

    // this.signals.log(await this.localMediaService.convertPhotoLibraryPathToFullPath(ph));//22
    // this.signals.log(await this.localMediaService.convertPhotoLibraryPathToUrl(ph));//23
  }

  async resolveFilePath(nativePath: string) {
    if (this.platform.is('ios')) {
      return nativePath;
    } else if (this.platform.is('android')) {
      return await this.filePath.resolveNativePath(nativePath);
    } else {
      throwError('Platform is not supported');
    }
  }

  // async getFileNameNative(nativePath: string) {
  //   const path = await this.resolveFilePath(nativePath);
  //   return path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('?'));
  // }

  getFileName(resolvedPath: string) {
    return resolvedPath.substring(resolvedPath.lastIndexOf('/') + 1);
  }

  getLocalFileUrl(resolvedPath: string) {
    try {
      const url = resolvedPath.split(';')[0];
      console.log('My resolved url:', url);
      return url;
    } catch (error) {
      console.log(error);
    }
  }

  async convertPhotoLibraryPathToNativeUrl(ph: PhotoLocal) {
    return (await this.file.resolveLocalFilesystemUrl('file://' + ph?.id?.split(';')[1])).nativeURL;
  }
  async convertPhotoLibraryPathToInternalUrl(ph: PhotoLocal) {
    return (await this.file.resolveLocalFilesystemUrl('file://' + ph?.id?.split(';')[1])).toInternalURL();
  }
  async convertPhotoLibraryPathToUrl(ph: PhotoLocal) {
    return (await this.file.resolveLocalFilesystemUrl('file://' + ph?.id?.split(';')[1])).toURL();
  }
  async convertPhotoLibraryPathToFullPath(ph: PhotoLocal) {
    return (await this.file.resolveLocalFilesystemUrl('file://' + ph?.id?.split(';')[1])).fullPath;
  }

  createFileName(oldFileName: string) {
    const ext = oldFileName.split('.').pop();
    const d = Date.now();
    return `${d}.${ext}`;
  }

  async createMediaDirectory() {
    const options = {
      path: this.mediaFolderName,
      directory: FilesystemDirectory.Data,
      recursive: true // create any parent directory
    };
    try {
        return await Filesystem.mkdir(options);
      // }
    } catch (e) {
      console.log(e);
    }
  }

  async writeToMediaDirectory(data: string, filename: string) {
    // check if media directory exist else create
    try {
      return await Filesystem.writeFile({
        data,
        path: this.mediaFolderName + '/' + filename,
        directory: FilesystemDirectory.Data // sho
      });
    } catch (error) {
      console.log(error);
    }
  }

  // async cordovaWriteToMediaDirectory(fileName: string, data: string | ArrayBuffer| Blob) {
  //   const options: IWriteOptions = {
  //     replace: true
  //   };
  //   try {
  //     return await this.file.writeFile(this.mediaFullPath, fileName, data, options);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  async getMediaUri(fileName: string) {
    return await Filesystem.getUri({
      directory: FilesystemDirectory.Data,
      path: this.mediaFolderName + '/' + fileName
    });
  }

  // take photo, rename it and write to media folder
  // and return photoLocal object
  async takePhoto() {
    const options: CameraOptions = {
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      correctOrientation: true,
      preserveAspectRatio: true,
      quality: 70,
      allowEditing: true,
    };
    // get the photo object
    try {
      const fileName = this.createFileName('temp.jpeg'); // create new unique file name; dummy file name as arg to generate new
      const photo = await Camera.getPhoto(options); // request to take Photo or select Photo
      const fileResult = await Filesystem.readFile({ path: photo.path }); // Read file from cache
      await this.writeToMediaDirectory(fileResult.data, fileName); // Write to media folder for permanent storage
      const uri = (await this.getMediaUri(fileName)).uri; // get full path of the file in the media folder
      const resolvedUri = Capacitor.convertFileSrc(uri);

      // create a local photo object and return
      return {
        id: '0;' + uri,
        photoNativeURL: uri,
        thumbnailNativeURL: uri,
        photoResolvedURL: resolvedUri,
        thumbnailResolvedURL: resolvedUri,
        fileName,
        creationDate: new Date(Date.now())
      } as PhotoLocal;
    } catch (e) {
      this.signals.log(e);
    }
  }

  async getPhoto() {
    return await this.takePhoto();
  }


  recordAudio() {
    
  }

  recordVideo() {
    
  }

  /***
   * Helper functions
   */
  correctCordovaNativeFilePath(fullPath: string) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }
    return myPath;
  }

  // async copyFileToLocalDir(fullPath, copyTo: string) {
  //   try {
  //     const myPath = this.correctCordovaNativeFilePath(fullPath);
  //     const newName = this.createFileName(myPath);

  //     const name = myPath.substr(myPath.lastIndexOf('/') + 1);
  //     const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
  //     console.log(copyFrom);
  //     console.log(copyTo);
  //     return await this.file.copyFile(copyFrom, name, copyTo, newName).then(entry => {
  //       return entry;
  //     }, error => console.log(error));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // openFile(f: FileEntry) {
  //   if (f.name.indexOf('.wav') > -1) {
  //     // We need to remove file:/// from the path for the audio plugin to work
  //     const path = f.nativeURL.replace(/^file:\/\//, '');
  //     const audioFile: MediaObject = this.media.create(path);
  //     audioFile.play();
  //   } else if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
  //     // E.g: Use the Streaming Media plugin to play a video
  //     this.streamingMedia.playVideo(f.nativeURL);
  //   } else if (f.name.indexOf('.jpg') > -1) {
  //     // E.g: Use the Photoviewer to present an Image
  //     this.photoViewer.show(f.nativeURL, 'MY awesome image');
  //   }
  // }

  // deleteFile(f: FileEntry) {
  //   const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
  //   this.file.removeFile(path, f.name).then(() => {
  //     this.loadFiles();
  //   }, err => console.log('error remove: ', err));
  // }

  // loadFiles() {
  //   this.file.listDir(this.file.dataDirectory, this.mediaFolderName).then(
  //     res => {
  //       // this.files = res;
  //       console.log(res);
  //     },
  //     err => console.log('error loading files: ', err)
  //   );
  // }
}
