import { UserService } from 'src/app/shared/services/model-service/user.service';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { MyFileType, Video } from 'src/app/models/my-media';
import { AudioLocal, VideoLocal, PhotoLocal } from '../../../../models/LocalMediaInterfaces';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { MySignals } from 'src/app/shared/services/my-signals';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Subject, throwError, Observable, observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { PhotoLibrary, GetLibraryOptions } from '@ionic-native/photo-library/ngx';
import { Injectable } from '@angular/core';
import { MyStorage } from './my-storage.service';
import { Capacitor, CameraResultType, Plugins, FilesystemDirectory, CameraOptions, CameraSource, FileWriteOptions, FileReadResult } from '@capacitor/core';
import { Entry, File as NativeFile } from '@ionic-native/file/ngx';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
// import { Media, MediaObject } from '@ionic-native/media/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

// not mandatory, only for code completion
import { RecordingData, GenericResponse } from 'capacitor-voice-recorder';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { FileChooser, FileChooserOptions } from '@ionic-native/file-chooser/ngx';

import { CreateThumbnailOptions, VideoEditor } from '@ionic-native/video-editor/ngx';
import * as PluginsLibrary from 'capacitor-video-player'; // ios
import { PermissionsService } from '../permission.service';
import { FileTransfer, FileTransferObject, FileUploadOptions, FileUploadResult } from '@ionic-native/file-transfer/ngx';
import { UPLOAD_URL } from '../../../config';
import { User } from 'src/app/models/user';
import { Media } from '@ionic-native/media/ngx';
import { RejectedFile } from 'ngx-dropzone/lib/ngx-dropzone.service';

const { CapacitorVideoPlayer, Device } = Plugins; // android

// without types
const { VoiceRecorder } = Plugins;

const { Camera, Filesystem, VideoRecorder } = Plugins;


export interface UploadCallBackOption { callerRef: any; func: any; createThumb?: boolean; url?: string; }


@Injectable({
  providedIn: 'root',
})
export class LocalMediaCordovaService {
  redirectUrl = '';
  mediaFolderName = 'media';
  mediaPath = '';
  mediaFullPath = '';

  user: User;

  files: File[] = [];
  rejectedFiles: RejectedFile[];

  stacked: { value: number, type: string, label: string }[] = [];
  progressColors = ['success', 'info', 'warning', 'danger'];


  fileType: MyFileType = MyFileType.PHOTO;
  cbOption: UploadCallBackOption; // callback function with this reference eg. [this, callBack]
  uploadUrl = UPLOAD_URL;

  constructor(
    private userService: UserService,
    private file: NativeFile,
    private platform: Platform,
    private filePath: FilePath,
    private signals: MySignals,
    private streamingMedia: StreamingMedia,
    private androidPermissions: AndroidPermissions,
    private imagePicker: ImagePicker,
    private fileChooser: FileChooser,
    private mediaCapture: MediaCapture,
    private videoEditor: VideoEditor,
    private photoLibrary: PhotoLibrary,
    private permissionService: PermissionsService,
    private fileTransfer: FileTransfer,
    private media: Media,
    private http: HttpClient,


  ) {
    this.mediaPath = this.file.dataDirectory;
    this.mediaFullPath = this.mediaPath + this.mediaFolderName;

    this.createMediaDirectory().then(results => {
      console.log('Media directory created');
      console.log(results);
    }).catch(e => console.error('Media directory creation failed'));

    this.getPermissions().then(_ => _).catch(error => {
      console.log(error);
    });

    if (this.platform.is('ios')) {

    } else if (this.platform.is('android')) {

    } else {
      throwError('Platform is not supported');
    }

    this.userService.getUserLocal().then(user => {
      this.user = user;
    });
  }

  async getPermissions() {
    if (this.platform.is('ios')) {

    } else if (this.platform.is('android')) {
      try {
        if (!(await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA)).hasPermission) {
          await this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
        }
      } catch (error) {

      }
    } else {
      throwError('Platform is not supported');
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
    // this.signals.log(ph.nativeURL);//20

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
  async convertPhotoLibraryPathToFullPath(ph: PhotoLocal | VideoLocal) {
    return (await this.file.resolveLocalFilesystemUrl('file://' + ph?.id?.split(';')[1])).fullPath;
  }

  createFileName(oldFileName: string) {
    const ext = oldFileName.split('.').pop();
    const d = Date.now();
    return `${this.user?.id}_${d}.${ext}`;
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
      // console.log(e);
    }
  }

  async writeToMediaDirectory(data: string, filename: string) {
    // check if media directory exist else create
    try {
      return await Filesystem.writeFile({
        data,
        path: this.mediaFolderName + '/' + filename,
        directory: FilesystemDirectory.Data // sho
      } as FileWriteOptions).catch(e => { console.log(JSON.stringify(e)); });
    } catch (error) {
      console.log(error);
    }
  }


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
      const photo = await Camera.getPhoto(options); // request to take Photo or select Photo
      const fileName = photo?.path?.substr(photo?.path?.lastIndexOf('/') + 1);

      // create a local photo object and return
      return {
        id: '0;' + photo?.path,
        nativeURL: photo?.path,
        thumbnailNativeURL: photo?.path,
        resolvedURL: Capacitor.convertFileSrc(photo?.path),
        thumbnailResolvedURL: Capacitor.convertFileSrc(photo?.path),
        fileName,
        creationDate: new Date(Date.now())
      } as PhotoLocal;
    } catch (e) {
      this.signals.log(e);
    }
  }

  async writePhotoToMediaDirectory(fullPath: string) {
    try {
      const fileName = this.createFileName(fullPath); // create new unique file name; dummy file name as arg to generate new
      const fileResult = await Filesystem.readFile({ path: fullPath }); // Read file from cache
      await this.writeToMediaDirectory(fileResult.data, fileName)
        .catch(e => (console.log(JSON.stringify(e)))); // Write to media folder for permanent storage
      const uri = (await this.getMediaUri(fileName)).uri; // get full path of the file in the media folder
      const resolvedUri = Capacitor.convertFileSrc(uri);

      // create a local photo object and return
      return {
        id: '0;' + uri,
        nativeURL: uri,
        thumbnailNativeURL: uri,
        resolvedURL: resolvedUri,
        thumbnailResolvedURL: resolvedUri,
        fileName,
        creationDate: new Date(Date.now())
      } as PhotoLocal;
    } catch (error) {
      console.log(error);
    }
  }

  async selectPhotosFromDevice() {
    const MAX_PHOTO_POST_COUNT = 10;
    const options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: MAX_PHOTO_POST_COUNT,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 800,
      height: 800,

      // quality of resized image, defaults to 100
      quality: 70,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 0,
      allow_video: true,
      allow_image: false,
      allow_photo: false
    } as ImagePickerOptions;
    const photos: PhotoLocal[] = [];
    try {
      const results = await this.imagePicker.getPictures(options);
      results.forEach(fileUri => {
        photos.push({
          id: '0;' + fileUri,
          fileName: this.getFileName(fileUri),
          nativeURL: fileUri,
          thumbnailNativeURL: fileUri,
          creationDate: new Date(Date.now()),
          resolvedURL: Capacitor.convertFileSrc(fileUri),
          thumbnailResolvedURL: Capacitor.convertFileSrc(fileUri),
        });
      });
      return photos;
    } catch (e) {
      console.log(e);
    }
  }


  async recordVideo() {
    try {
      const data: MediaFile[] = (await this.mediaCapture.captureVideo()) as any;
      // console.log(data);
      if (data?.length > 0) {
        console.log(data[0].fullPath);
        const uri = data[0].fullPath;
        const fileName = uri.substr(uri.lastIndexOf('/') + 1);
        const resolvedUri = Capacitor.convertFileSrc(uri);
        console.log('working');
        // create a local video object and return
        const vid = {
          id: '0;' + uri,
          nativeURL: uri,
          posterNativeURL: uri,
          resolvedURL: resolvedUri,
          posterResolvedURL: resolvedUri,
          fileName,
          creationDate: new Date(Date.now())
        } as VideoLocal;
        const thumbUrl: string = await this.generateVideoThumbnail(vid, true);
        console.log(thumbUrl);
        vid.posterNativeURL = thumbUrl;
        vid.posterResolvedURL = Capacitor.convertFileSrc(thumbUrl);
        return vid;
      }
    } catch (error) {
      console.log(error);
    }

  }
  async selectVideoFromDevice() {
    try {
      let path: string = (await this.fileChooser.open().catch(e => console.log(e))) as any;
      path = (await this.filePath.resolveNativePath(path).catch(e => console.log(e))) as any;
      if (!this.isVideo(path)) { // filter photos
        return;
      }
      path = this.correctNativeFilePath(path);
      console.log(path);

      const vid = {
        id: '0;' + path,
        nativeURL: path,
        posterNativeURL: path,
        resolvedURL: '',
        posterResolvedURL: '',
        fileName: path.substr(path.lastIndexOf('/') + 1),
        creationDate: new Date(Date.now())
      } as VideoLocal;
      vid.resolvedURL = Capacitor.convertFileSrc(vid.nativeURL);
      const thumbUrl: string = await this.generateVideoThumbnail(vid);
      console.log(thumbUrl);
      vid.posterNativeURL = thumbUrl;
      vid.posterResolvedURL = Capacitor.convertFileSrc(thumbUrl);
      return vid;

    } catch (e) {
      console.log(e);
    }
  }

  async generateVideoThumbnail(vid: VideoLocal, toMediaFolder = false) {
    const outputFileName = 'thumb_' + vid.fileName.substr(0, vid.fileName.lastIndexOf('.'));
    console.log(outputFileName);
    try {
      const option: CreateThumbnailOptions = {
        fileUri: vid.nativeURL,
        /** The file name for the JPEG image */
        outputFileName,
        /** Location in the video to create the thumbnail (in seconds) */
        atTime: 3,
        /** Width of the thumbnail. */
        width: 800,
        /** Height of the thumbnail. */
        height: 600,
        /** Quality of the thumbnail (between 1 and 100). */
        quality: 90
      };
      const thumbURL: string = (await this.videoEditor.createThumbnail(option).catch(e => console.log(e))) as any;
      console.log(thumbURL);
      if (toMediaFolder) {
        // Read file from cache
        const fileResult: FileReadResult = (await Filesystem.readFile({ path: this.correctNativeFilePath(thumbURL) })
          .catch(e => console.log(JSON.stringify(e)))) as any;
        // Write to media folder for permanent storage
        await this.writeToMediaDirectory(fileResult.data, outputFileName + '.jpg')
          .catch(e => console.log(e));
        // get full path of the file in the media folder
        const uri = (await this.getMediaUri(outputFileName + '.jpg')
          .catch(e => { console.log(e); }) as any)?.uri;
        return uri;
      }
      return thumbURL;
    } catch (error) {
      console.log(error);
    }
  }

  async writeVideoToMediaDirectory(fullPath: string) {
    this.getPermissions();
    const fileName = this.createFileName(fullPath); // create new unique file name; dummy file name as arg to generate new
    const fileResult = (await Filesystem.readFile({ path: fullPath })
      .catch(e => console.log(JSON.stringify(e)))) as any; // Read file from cache
    await this.writeToMediaDirectory(fileResult.data, fileName); // Write to media folder for permanent storage
    const uri = (await this.getMediaUri(fileName)).uri; // get full path of the file in the media folder
    const resolvedUri = Capacitor.convertFileSrc(uri);
    const mediaObject = this.media.create(uri);
    console.log('working');
    // create a local video object and return
    const vid = {
      id: '0;' + uri,
      nativeURL: uri,
      posterNativeURL: uri,
      resolvedURL: resolvedUri,
      posterResolvedURL: resolvedUri,
      fileName,
      creationDate: new Date(Date.now()),
      length: mediaObject.getDuration()
    } as VideoLocal;
    const thumbUrl: string = await this.generateVideoThumbnail(vid, true);
    console.log(thumbUrl);
    vid.posterNativeURL = thumbUrl;
    vid.posterResolvedURL = Capacitor.convertFileSrc(thumbUrl);
    return vid;
  }

  // /***
  //  * Helper functions
  //  */
  correctNativeFilePath(fullPath: string) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }
    return myPath;
  }


  // async recordAudio() {
  //   try {
  //     return this.mediaCapture.captureAudio().then(data => {
  //       data = data as MediaFile[];
  //       console.log(JSON.stringify(data));

  //       if (data?.length > 0) {
  //         console.log(data[0].fullPath);
  //         const uri = data[0].fullPath;
  //         const fileName = uri.substr(uri.lastIndexOf('/') + 1);
  //         const resolvedUri = Capacitor.convertFileSrc(uri);
  //         console.log('working');
  //         // create a local video object and return
  //         const aud = {
  //           id: '0;' + uri,
  //           nativeURL: uri,
  //           posterNativeURL: '',
  //           resolvedURL: resolvedUri,
  //           posterResolvedURL: '',
  //           fileName,
  //           creationDate: new Date(Date.now())
  //         } as AudioLocal;
  //         return aud;
  //       }
  //     }, (error) => {
  //       console.log(JSON.stringify(error));
  //     });
  //   } catch (error) {
  //     console.log(JSON.stringify(error));

  //   }
  // }

  async selectAudioFromDevice() {
    try {
      let path: string = (await this.fileChooser.open().catch(e => console.log(e))) as any;
      path = (await this.filePath.resolveNativePath(path).catch(e => console.log(e))) as any;
      if (!this.isAudio(path)) { // filter photos
        return;
      }
      path = this.correctNativeFilePath(path);
      console.log(path);

      const aud = {
        id: '0;' + path,
        nativeURL: path,
        posterNativeURL: '',
        resolvedURL: Capacitor.convertFileSrc(path),
        posterResolvedURL: '',
        fileName: path.substr(path.lastIndexOf('/') + 1),
        creationDate: new Date(Date.now())
      } as AudioLocal;
      return aud;
    } catch (e) {
      console.log(e);
    }
  }

  async writeAudioToMediaDirectory(fullPath: string) {
    try {
      const fileName = this.createFileName(fullPath); // create new unique file name; dummy file name as arg to generate new
      const fileResult = (await Filesystem.readFile({ path: fullPath })
        .catch(e => console.log(JSON.stringify(e)))) as any; // Read file from cache
      await this.writeToMediaDirectory(fileResult.data, fileName); // Write to media folder for permanent storage
      const uri = (await this.getMediaUri(fileName)).uri; // get full path of the file in the media folder
      const resolvedUri = Capacitor.convertFileSrc(uri);
      const mediaObject = this.media.create(uri);
      // create a local photo object and return
      return {
        id: '0;' + uri,
        nativeURL: uri,
        resolvedURL: resolvedUri,
        fileName,
        creationDate: new Date(Date.now()),
        length: mediaObject.getDuration()
      } as AudioLocal;
    } catch (error) {
      console.log(error);
    }
  }


  isPhoto(uri: string) {
    if (
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.png') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.jpg') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.jpeg') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.bmp') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.gif') > -1) {
      return true;
    }
  }

  private isVideo(uri: string) {
    if (
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.avi') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.mov') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.mp4') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.3gp') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.webm') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.ogg') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.mkv') > -1) {
      return true;
    }
  }

  isAudio(uri: string) {
    if (
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.au') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.m3u') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.midi') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.mod') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.mp2') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.mp3') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.wav') > -1 ||
      ((uri?.toLocaleLowerCase()?.split('/')?.pop()) ?? '').search('.voc') > -1) {
      return true;
    }
  }


  upload(fileUri: string, fileName: string, createThumb = false) {
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    // const headers = new HttpHeaders();
    // headers.set('boundary', '---------------------------293582696224464');

    const options: FileUploadOptions = {
      fileKey: 'file',
      fileName,
      headers: { ['Authorization']: 'Bearer ' + this.userService.token.token }
    };
    console.log(JSON.stringify(options));
    return fileTransfer
      .upload(fileUri, UPLOAD_URL + `/${createThumb}`, options)
      .then(
        data => {
          console.log(data);
          return data;
        },
        e => {
          throwError(UtilityService.myHttpErrorFormat(e, 'Upload'));
        }
      );
  }


  private uploadProgressSource = new Subject<number>();
  uploadProgressSource$ = this.uploadProgressSource.asObservable();

  announceUploadProgress(progress: number) {
    this.uploadProgressSource.next(progress);
  }

  async uploadJs(fileUri: string, fileName: string, createThumb = false) {

    const fileBlob: FileReadResult = (await Filesystem.readFile({ path: fileUri })
      .catch(e => console.log(JSON.stringify(e)))) as any; // Read file from cache
    // Update UI progress bar
    this.stacked.push({ value: 0, type: this.progressColors[Math.floor(Math.random() * 4)], label: '0%' });

    const file = new File([fileBlob.data], UtilityService.generateUniqueFileName(fileName), {
      lastModified: Date.now(),
      // type: file.type,
    });

    console.log(JSON.stringify(file));
    const formData = new FormData();
    formData.append(file.name, file);

    const headers = new HttpHeaders({
      boundary: '---------------------------293582696224464',
      ['Authorization']: 'Bearer ' + this.userService.token.token
    });
    const option = {
      headers,
      reportProgress: true,
      observe: 'events'
      // withCredentials: true
    };

    const req = new HttpRequest('POST', UPLOAD_URL + `/${createThumb}`, formData, option);
    this.http.request(req).subscribe(data => {
      switch (data.type) {
        case HttpEventType.Sent:
          break;
        case HttpEventType.UploadProgress:
          const tmp = (data as { type: number, loaded: number, total: number });
          const percent = Math.floor((tmp.loaded / tmp.total) * 100);
          console.log(percent);
          this.announceUploadProgress(percent);
          break;
        case HttpEventType.Response:
          this.signals.announceUploadComplete(percent);
          return data;
          // break;
        default:
      }
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      // clear files
    });
  }
}

