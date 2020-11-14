import { Photo, Video } from './../../../models/media';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyStorage } from '../providers/storage/my-storage.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UtilityService } from '../providers/utility.service';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  redirectUrl = '';

  constructor(private http: HttpClient, private store: MyStorage) {

  }

  updatePhoto(photo: Photo) {
    return this.http.patch<Photo>(`/photos/${photo.id}`, photo).pipe(
      map(res => {
        console.log(res);
        return res as any;
      }),
      catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School photo')))
    );
  }
  updateVideo(video: Video) {
    return this.http.patch<Video>(`/videos/${video.id}`, video).pipe(
      map(res => {
        console.log(res);
        return res as any;
      }),
      catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School photo')))
    );
  }
  deletePhoto(photoId: any) {
    return this.http.delete<Photo>(`/photos/${photoId}`).pipe(
      map(res => {
        console.log(res);
        return res as any;
      }),
      catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School photo')))
    );
  }

  createSchoolPhoto(schoolId: any, photo: Photo) {
    if (!photo.id) {
      return this.http.post<Photo>(`/schools/${schoolId}/photos`, photo).pipe(
        map(res => {
          console.log(res);
          return res as any;
        }),
        catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School photo')))
      );
    } else {
      return this.http.patch<Photo>(`/schools/${schoolId}/photos`, photo).pipe(
        map(res => {
          console.log(res);
          return res as any;
        }),
        catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School photo')))
      );
    }
  }

  createSchoolVideo(schoolId: any, video: Video) {
    if (!video.id) {
      return this.http.post<Photo>(`/schools/${schoolId}/videos`, video).pipe(
        map(res => {
          console.log(res);
          return res as any;
        }),
        catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School video')))
      );
    } else {
      return this.http.patch<Photo>(`/schools/${schoolId}/videos`, video).pipe(
        map(res => {
          console.log(res);
          return res as any;
        }),
        catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School video')))
      );
    }
  }


  getSchoolPhotos(schoolId: any, filter: any = null) {
    if (!schoolId) {
      return;
    }
    if (!filter) {
      filter = {};
    }
    const url = `/schools/${schoolId}/photos?filter=` + JSON.stringify(filter);
    return this.http.get<Photo[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School photo')))
    );
  }

  getSchoolVideos(schoolId: any, filter: any = null) {
    if (!schoolId) {
      return;
    }
    if (!filter) {
      filter = {};
    }
    const url = `/schools/${schoolId}/videos?filter=` + JSON.stringify(filter);
    return this.http.get<Video[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'School video')))
    );
  }





  createUserPhoto(userId: any, photo: Photo) {
    if (!photo.id) {
      return this.http.post<Photo>(`/users/${userId}/photos`, photo).pipe(
        map(res => {
          console.log(res);
          return res as any;
        }),
        catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'User photo')))
      );
    } else {
      return this.http.patch<Photo>(`/users/${userId}/photos`, photo).pipe(
        map(res => {
          console.log(res);
          return res as any;
        }),
        catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'User photo')))
      );
    }
  }

  getUserPhotos(userId: any, filter: any = null) {
    if (!userId) {
      return;
    }
    if (!filter) {
      filter = {};
    }
    const url = `/users/${userId}/photos?filter=` + JSON.stringify(filter);
    return this.http.get<Photo[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => throwError(UtilityService.myHttpErrorFormat(e, 'User photo')))
    );
  }

}
