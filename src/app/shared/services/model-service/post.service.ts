import { IdentityPhoto, Photo, PhotoType } from './../../../models/my-media';
import { Post } from './../../../models/post';
import { MySignals } from '../my-signals';
import { AlumniInterface } from '../../../models/alumni';
import { Degree } from '../../../models/degree';
import { UtilityService } from '../providers/utility.service';
import { PageInfo, getPagedData } from '../../../models/page';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Alumni } from '../../../models/alumni';
import { MyStorage } from '../providers/storage/my-storage.service';
import { DOWNLOAD_CONTAINER, SERVER_DOWNLOAD_PATH, USER_DEFAULT_PHOTO_URL } from '../../config';
import { User } from 'src/app/models/user';



@Injectable({
  providedIn: 'root',
})
export class PostService {


  constructor(
    private http: HttpClient,
    private store: MyStorage,
    private signals: MySignals
  ) {

  }

  creatPost(post: Post): Observable<Post> {
    if (!post?.message) {
      return;
    }
    return this.http.post<Post>(`/posts/`, post).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  updatePost(post: Post): Observable<Post> {
    if (!post?.id) {
      return;
    }
    return this.http.patch<Post>(`/posts/`, post).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  deletePost(postId: any): Observable<Post> {
    if (!postId) {
      return;
    }
    return this.http.delete<Post>(`/posts/${postId}`).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getPost(pageInfo?: PageInfo, filter: any = {
    order: 'id DESC',
    include: [
      {
        relation: 'photos',
      },
      {
        relation: 'videos'
      },
      {
        relation: 'audios'
      },
      {
        relation: 'postConfig'
      },
      {
        relation: 'user',
        scope: {
          include: [
            {
              relation: 'photos',
              scope: {
                where: {
                  profile: true
                }
              }
            },
            { relation: 'address' }
          ]
        }
      },
    ]
  }): Observable<Post[]> {
    if (pageInfo) {
      filter = {
        order: 'id DESC',
        offset: pageInfo.offset,
        limit: pageInfo.limit,
        include: filter.include
      };
    }
    filter = filter ? 'filter=' + JSON.stringify(filter) : '';
    const url = '/posts?' + filter;
    // // console.log(url);
    return this.http.get<Post[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getSchoolPosts(schoolId: string | number, pageInfo?: PageInfo, filter: any = {
    order: 'id DESC',
    include: [
      {
        relation: 'photos',
      },
      {
        relation: 'videos'
      },
      {
        relation: 'audios'
      },
      {
        relation: 'postConfig'
      },
      {
        relation: 'user',
        scope: {
          include: [
            {
              relation: 'photos',
              scope: {
                where: {
                  profile: true
                }
              }
            },
            { relation: 'address' }
          ]
        }
      },
    ]
  }): Observable<Post[]> {
    if (pageInfo) {
      filter = {
        order: 'id DESC',
        offset: pageInfo.offset,
        limit: pageInfo.limit,
        include: filter.include
      };
    }
    filter.where = {
      schoolId
    };
    console.log(filter);
    filter = filter ? 'filter=' + JSON.stringify(filter) : '';
    const url = '/posts?' + filter;
    // // console.log(url);
    return this.http.get<Post[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }


  /////////////////////////////////////////////////////////////////////////
  /*************Local Post access*****/
  ///////////////////////////////////////////////////////////////////////////



  // Read alumni object from session storage
  async getAlumniLocal(): Promise<Alumni> {
    return (await this.store.getObject('alumni'));
  }

  deleteAlumniLocal() {
    this.store.remove('alumni');
  }

  private handleError(e: any): any {
    // console.log(e);
    return throwError(UtilityService.myHttpErrorFormat(e, 'alumni'));
  }


 
  /////////////////////////////////////////////////////////////////////////
  /*************Local user access*****/
  ///////////////////////////////////////////////////////////////////////////


  // Read post object from sesson storage
  async getPostLocal(): Promise<Post> {
    return await this.store.getObject('post');
  }

  deleteUserLocal() {
    this.store.remove('user');
  }

  async setPostLocal(post: Post): Promise<boolean> {
    return await this.store.setObject('post', post);
  }

}
