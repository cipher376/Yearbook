// // import { environment } from './../../environments/environment';
// import { LocalDbTable, LocalDbTableEntity } from '../../interfaces/interface';
// import { Injectable } from '@angular/core';
// import { FilePath } from '@ionic-native/file-path/ngx';
// import { Platform } from '@ionic/angular';
// import {
//   Camera,
//   // DestinationType,
//   CameraOptions
// } from '@ionic-native/camera/ngx';
// // import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { File, FileEntry } from '@ionic-native/file/ngx';
// import { FStorageService } from '../../providers/f-storage.service';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import { throwError } from 'rxjs/internal/observable/throwError';
// import { LoopBackConfig, PhotoApi, FameIdentityApi, ContainerApi } from '../sdk';
// // import { SHA3 } from 'sha3';
// import { map, catchError } from 'rxjs/operators';
// // import { Device } from '@ionic-native/device/ngx';
// import {
//   ImagePicker,
//   ImagePickerOptions,
//   OutputType
// } from '@ionic-native/image-picker/ngx';
// import {
//   FileTransfer,
//   FileUploadOptions,
//   FileTransferObject
// } from '@ionic-native/file-transfer/ngx';
// import {
//   ImageResizer,
//   ImageResizerOptions
// } from '@ionic-native/image-resizer/ngx';
// import { UUID } from 'angular2-uuid';
// import { Toast } from 'ionic-angular';
// import { ToasterService } from 'src/app/providers/toaster.service';
// import { normalizeURL } from 'ionic-angular';

// export enum PHOTOSOURCE {
//   CAMERA = 0,
//   LIBRARY = 1
// }

// export enum FileType {
//   INVALID = 0,
//   PHOTO = 1,
//   VIDEO = 2,
//   MUSIC = 3,
//   DOC = 4
// }
// export enum UPLOAD_SELECTOR {
//   COVER_PHOTO = 0,
//   LAND_MARK_PHOTO = 1,
//   REGULAR_PHOTO = 2
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class MyFileService {
//   // database tables stored individualy for performance sake
//   TABLES = [
//     'IMAGE',
//     'MUSIC',
//     'VIDEO',
//     'BOOKMARK',
//     'ALBUMS',
//     'EVENTS',
//     'PHOTOS'
//   ];
//   MAIN_FOLDER = normalizeURL(this._file.dataDirectory);
//   MAIN_CACHE = normalizeURL(this._file.cacheDirectory);

//   CONTAINER_ROOT = LoopBackConfig.getPath() +
//     '/' +
//     LoopBackConfig.getApiVersion() +
//     '/containers/';

//   // CONTAINER_ROOT =
//   //   'http:' +
//   //   LoopBackConfig.getPath() +
//   //   '/' +
//   //   LoopBackConfig.getApiVersion() +
//   //   '/assets/upload';

//   imageCropWith = 480;
//   imageCropHeight = 640;
//   imageQuality = 90;

//   // broadcast
//   private _filesSource = new Subject<FileEntry>();
//   _fileEntry$ = this._filesSource.asObservable();

//   fileDeletedSource = new Subject<Boolean>();
//   fileDeleted$ = this.fileDeletedSource.asObservable();

//   constructor(
//     private _identity: FameIdentityApi,
//     // private _assets: AssetApi,
//     private _fstore: FStorageService,
//     private _file: File,
//     private _camera: Camera,
//     private _platform: Platform,
//     private _filePath: FilePath,
//     private _transfer: FileTransfer,
//     // private _device: Device,
//     private _imagePicker: ImagePicker,
//     private _photoApi: PhotoApi,
//     private _imageResizer: ImageResizer,
//     private _container: ContainerApi,
//     private _toaster: ToasterService
//     // private _http: HttpClient
//   ) {
//     this.createLocalFolders();
//   }

//   createLocalFolders() {
//     // check if main and cache folder exit
//     try {

//       // create cache and main directory if not exit

//       this._file.createDir(this.MAIN_FOLDER, 'temp', false).then(dirEntry => {
//         console.log(dirEntry.fullPath, ' created!');
//       }, error => {
//         console.log(error, '--> Faild to create data folder');
//       });

//       this._file.createDir(this.MAIN_CACHE, 'temp', false).then(dirEntry => {
//         console.log(dirEntry.fullPath, ' created!');
//       }, error => {
//         console.log(error, '--> Faild to create cache folder');
//       });

//       this._file.getFreeDiskSpace().then(space => {
//         console.log(space);
//         if (space < 500000) { // less than 500mb
//           this._toaster.toast('Your device is running out of space!');
//         }
//       }, error => {
//         console.log(error);
//       });


//     } catch (error) {
//       console.log(error);
//     }
//   }


//   getBucket(identityId: string) {
//     // const hash = new SHA3(512);
//     // hash.update('Fame' + identityId);
//     // return hash.digest('hex');
//     return UUID.UUID();
//   }

//   // Create local folder
//   // async createFolderLocal(identityId: string) {
//   //   const local_folder = 'fame' + identityId;

//   //   await this._platform.ready().then(() => {
//   //     // Create folder in the data directory and in the cache
//   //     // this._file.createDir(this.MAIN_FOLDER, this.LOCAL_FOLDER, false).then(res => {
//   //     //   console.log(res);
//   //     //   this._fstore.set('local_folder', local_folder).then(() => {
//   //     //     console.log('Local container created');
//   //     //   });
//   //     //   if (res) {
//   //     //   }
//   //     // }, error => {
//   //     //   console.log(error);
//   //     //   console.log('Creating local directory at data folder failed');
//   //     // });
//   //     // this._file.createDir(this.MAIN_CACHE, this.LOCAL_FOLDER, false).then(res => {
//   //     //   console.log(res);
//   //     //   this._fstore.set('local_folder', local_folder).then(() => {
//   //     //     console.log('Local container created');
//   //     //   });
//   //     // }, error => {
//   //     //   console.log(error);
//   //     //   console.log('Creating local directory at cache folder failed');
//   //     // });
//   //   });
//   // }

//   // Create the local database
//   async createLocalDatabase() {
//     this.TABLES.forEach(table_name => {
//       const table = <LocalDbTable>{};
//       table.name = table_name;
//       table.data = [];
//       this._fstore.setObject(table_name, table).then(
//         res => {
//           if (res) {
//             console.log('Local database: ' + table_name + ' created ');
//           }
//         },
//         error => {
//           console.log(table_name + ' database creation failed');
//         }
//       );
//     });
//   }

//   async getLocalTableEntity(table_name: string, key: string) {
//     return this._fstore.getObject(table_name).then(res => {
//       const table = <LocalDbTable>res;
//       if (table && table.data) {
//         let objectToReturn;
//         table.data.forEach(entity => {
//           if ((entity.key = key)) {
//             objectToReturn = entity;
//           }
//         });
//         return objectToReturn;
//       } else {
//         console.log('Object with key: ' + key + 'not found!');
//       }
//     });
//   }

//   async insertLocalTableEntity(table_name: string, entity: LocalDbTableEntity) {
//     return this._fstore.getObject(table_name).then(res => {
//       const table = <LocalDbTable>res;
//       if (table && table.data) {
//         table.data.push(entity);
//         // save the new data
//         return this._fstore.setObject(table_name, table).then(done => {
//           return done;
//         });
//       } else {
//         console.log('Table to insert do not exist');
//       }
//     });
//   }

//   async deleteLocalTableEntity(table_name: string, key: string) {
//     return this._fstore.getObject(table_name).then(res => {
//       const table = <LocalDbTable>res;
//       const newData = [];
//       if (table && table.data) {
//         table.data.forEach(obj => {
//           if (obj.key !== key) {
//             newData.push(obj);
//           }
//         });
//         table.data = newData;
//         // store the remaining data;
//         return this._fstore.setObject(table_name, table).then(done => {
//           return done;
//         });
//       } else {
//         console.log('Table to insert do not exist');
//       }
//     });
//   }

//   async updateLocalTableEntity(table_name: string, entity: LocalDbTableEntity) {
//     return this.deleteLocalTableEntity(table_name, entity.key).then(res => {
//       if (res) {
//         return this.insertLocalTableEntity(table_name, entity).then(done => {
//           return done;
//         });
//       }
//     });
//   }

//   /**********UPloading to remote server, fileUri->file:///data/user/0/io.ionic.starter/cache/1554405708671.jpg,
//   remoteUrl--> http://www.api.com/container,
//   fileName --> mongo.txt */
//   upload(fileUri: string, fileName: string, remoteFolder: string) {
//     const fileTransfer: FileTransferObject = this._transfer.create();
//     const token = this._identity.getCurrentToken();
//     const options: FileUploadOptions = {
//       fileKey: 'file',
//       fileName: fileName,
//       headers: { Authorization: token.id }
//     };

//     console.log(options);
//     return fileTransfer
//       .upload(fileUri, this.CONTAINER_ROOT + remoteFolder + '/upload', options)
//       .then(
//         data => {
//           console.log(data);
//           return data;
//         },
//         err => {
//           this.handleError(err);
//         }
//       );
//   }

//   // uploadHttp(fileUri: string, fileName: string, remoteFolder: string) {
//   //   fileUri = '/home/Cypher/Downloads/IMG_20190404_170617_8.jpg'
//   //   const token = this._identity.getCurrentToken();
//   //   // const options: FileUploadOptions = {
//   //   //   fileKey: 'file',
//   //   //   fileName: fileName,
//   //   //   headers: { Authorization: token.id }
//   //   // };

//   //   const readFile = function (file: any) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       const formData = new FormData();
//   //       const imgBlob = new Blob([reader.result], {
//   //         type: file.type
//   //       });
//   //       formData.append('file', imgBlob, file.name);

//   //       // post the file to the server
//   //       console.log(formData);
//   //     };
//   //     reader.readAsArrayBuffer(file);
//   //   };

//   //   this._file
//   //     .resolveLocalFilesystemUrl(fileUri)
//   //     .then(entry => {
//   //       (<FileEntry>entry).file(fs => readFile(fs));
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     });

//   //   // this._http.post()

//   // }
//   /*******
//    *  remoteUrl = 'http://www.example.com/file.pdf';
//    */
//   download(remoteFolder: string, fileName: string) {
//     const token = this._identity.getCurrentToken();
//     const options: FileUploadOptions = {
//       fileKey: 'file',
//       fileName: fileName,
//       headers: { Authorization: token.id }
//     };
//     const fileTransfer: FileTransferObject = this._transfer.create();
//     fileTransfer
//       .download(
//         this.CONTAINER_ROOT + remoteFolder + '/download/' + fileName,
//         this.MAIN_CACHE + '/' + fileName,
//         true,
//         options
//       )
//       .then(
//         entry => {
//           console.log('download complete: ' + entry.toURL());
//         },
//         error => {
//           // handle error
//         }
//       );
//   }

//   /** Delete remove file and if error, the error should be handled by the caller */
//   deleteRemoteFile(
//     container: string,
//     fileName: string,
//     id: string,
//     fileType: FileType
//   ) {
//     // Delete the file from the server folder,
//     this._container.removeFile(container, fileName).subscribe(deleted => {
//       console.log(deleted);
//       if (deleted) {
//         // delete file from database
//         if (fileType === FileType.PHOTO) {
//           const sub = this.deletePhoto(id).subscribe(isDelete => {
//             console.log(isDelete);
//             if (isDelete) {
//               this.fileDeletedSource.next(true);
//             } else {
//               this.fileDeletedSource.next(false);
//             }
//           });
//         }
//       } else {
//         console.log('Delete file from server folder failed');
//         this.fileDeletedSource.next(false);
//       }
//     }, error => this.handleFileDeleteError(error, id, fileType));
//   }

//   /*******Delete photo from remote database ********* */
//   private deletePhoto(id) {
//     return this._photoApi.deleteById(id).pipe(
//       map(res => {
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   handleFileDeleteError(e: any, id: string, fileType: FileType): any {
//     console.log(e);
//     if (e && e.message && e.message.indexOf('no such file or directory') > -1) {
//       // file not found on the server
//       // try deleting it from the database to prevent orphans
//       switch (fileType) {
//         case FileType.INVALID:
//           break;
//         case FileType.PHOTO:
//           this._photoApi.deleteById(id).subscribe(ph => {
//             console.log('Photo deleted event firing');
//             this.fileDeletedSource.next(true);
//           });
//           break;
//         case FileType.MUSIC:
//           break;
//         case FileType.VIDEO:
//           break;
//         case FileType.DOC:
//           break;
//       }
//     }
//     return throwError('File deletion error');
//   }

//   /************ Call Camera and take a new picture ***********/
//   takePicture(
//     quality = null,
//     resizeWidth = null,
//     resizeHeight = null
//   ): Promise<FileEntry | void> {
//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this._camera.DestinationType.FILE_URI,
//       sourceType: this._camera.PictureSourceType.CAMERA,
//       // sourceType: 1, // Camera
//       saveToPhotoAlbum: true,
//       correctOrientation: true
//     };

//     let file: FileEntry;
//     // Take the picture and then copy the picture to
//     // a temp directory that is used by our application
//     return this._camera.getPicture(options).then(imagePath => {
//       if (this._platform.is('android')) {
//         return this._filePath
//           .resolveNativePath(normalizeURL(imagePath))
//           .then(filePath => {
//             const resizeOptions = {
//               uri: normalizeURL(filePath),
//               folderName: 'Protonet',
//               quality: quality ? quality : this.imageQuality,
//               width: resizeWidth ? resizeWidth : this.imageCropWith,
//               height: resizeHeight ? resizeHeight : this.imageCropHeight
//             } as ImageResizerOptions;

//             this._imageResizer
//               .resize(resizeOptions)
//               .then((resize_filePath: string) => {
//                 console.log('ResizedFilePath', normalizeURL(resize_filePath));

//                 const takenImagePath = resize_filePath.substr(
//                   0,
//                   resize_filePath.lastIndexOf('/')
//                 );
//                 const takenImageName = resize_filePath.split('/').pop();
//                 console.log(takenImageName);
//                 console.log(takenImagePath);
//                 const newName = this.createFileName('jpg');
//                 this._file
//                   .copyFile(
//                     takenImagePath,
//                     takenImageName,
//                     this.MAIN_CACHE,
//                     newName
//                   )
//                   .then(
//                     res => {
//                       if (res) {
//                         console.log(res);
//                         file = <FileEntry>res;
//                         // Broadcast the resized image
//                         this._filesSource.next(file);
//                       }
//                     },
//                     error => {
//                       console.log(error);
//                       console.log('Failed to move files to cache');
//                     }
//                   );
//               }, error => {
//                 console.log(error);
//               });
//           })
//           .catch(err => {
//             console.log('Directory doesn\'t exist');
//           });
//       }
//     }).catch(err => {
//       console.log(err);
//     });
//   }

//   /****************Load picture from the gallery directory*********/
//   async loadPicture(
//     maxCount = 1,
//     quality = null,
//     resizeWidth = null,
//     resizeHeight = null
//   ) {
//     const options = <ImagePickerOptions>{};
//     options.maximumImagesCount = maxCount;
//     options.outputType = OutputType.FILE_URL; // Data_uri
//     options.height = this.imageCropHeight;
//     options.width = this.imageCropWith;


//     this._imagePicker.hasReadPermission().then(perm => {
//       if (perm) {
//         initPictureLoading(this);
//       } else {
//         // No permission so request for permission
//         this._imagePicker.requestReadPermission().then(() => initPictureLoading(this), (rejectionReason) => {
//           console.log(rejectionReason);
//         });
//       }
//     }, error => {
//       console.log(error);
//     });

//     function initPictureLoading(thisRef: any) {
//       console.log("hhkjhkjhk");
//       thisRef._imagePicker.getPictures(options).then(
//         results => {
//           for (let i = 0; i < results.length; i++) {
//             console.log('Image URI: ' + results[i]);
//             thisRef._filePath
//               .resolveNativePath(normalizeURL(results[i]))
//               .then(filePath => {
//                 const resizeOptions = {
//                   uri: normalizeURL(filePath),
//                   folderName: 'Protonet',
//                   quality: quality ? quality : thisRef.imageQuality,
//                   width: resizeWidth ? resizeWidth : thisRef.imageCropWith,
//                   height: resizeHeight ? resizeHeight : thisRef.imageCropHeight
//                 } as ImageResizerOptions;
//                 thisRef._imageResizer
//                   .resize(resizeOptions)
//                   .then((resize_filePath: string) => {
//                     console.log('ResizedFilePath', resize_filePath);
//                     const takenImagePath = resize_filePath.substr(
//                       0,
//                       resize_filePath.lastIndexOf('/') + 1
//                     );
//                     const takenImageName = resize_filePath.split('/').pop();
//                     thisRef._file
//                       .copyFile(
//                         takenImagePath,
//                         takenImageName,
//                         thisRef.MAIN_CACHE,
//                         thisRef.createFileName('jpg')
//                       )
//                       .then(
//                         res => {
//                           const file = <FileEntry>res;
//                           if (res) {
//                             console.log(res);
//                             // Broadcast the file entry object
//                             // Should be handled by the caller
//                             thisRef._filesSource.next(file);
//                           }
//                         },
//                         error => {
//                           console.log(error);
//                           console.log('Failed to move files to cache');
//                           thisRef._filesSource.next(null);
//                         }
//                       );
//                   });
//               })
//               .catch(err => {
//                 console.log('Directory doesn\'t exist');
//               });
//           }
//         },
//         err => {
//           console.log(err);
//         }
//       );
//     }

//   }

//   /*********Rename the file to prevent conflicts, args: type -> jpg, pdf, txt, png,... */
//   createFileName(type: string) {
//     // add the current time to the orignal name
//     // of the picture to prevent conflicts
//     const d = new Date(),
//       n = d.getTime(),
//       newFileName = n + '.' + type;
//     return newFileName;
//   }

//   readFileToBuffer(file: FileEntry) {
//     this._file
//       .resolveLocalFilesystemUrl(file.fullPath)
//       .then(entry => {
//         (<FileEntry>entry).file(fs => this.readFile(fs));
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   readFile(file: any) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const formData = new FormData();
//       const imgBlob = new Blob([reader.result], {
//         type: file.type
//       });
//       formData.append('file', imgBlob, file.name);

//       // Broad cast form data object
//       // TODO:
//     };
//     reader.readAsArrayBuffer(file);
//   }

//   handleError(e: any): any {
//     console.log(e);
//     if (e.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', e.error.message);
//       console.log('No connection');
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${e.status}, ` + `body was: ${e.code}`
//       );
//     }
//     // return an observable with a user-facing error message
//     return throwError('System error, please report to: antiamoah890@gmail.com');
//   }
// }
