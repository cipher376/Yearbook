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
    include: [
      {
        relation: 'photos',
      },
      {
        relation: 'videos'
      },
      {
        relation: 'audio'
      },
      {
        relation: 'postConfig'
      }
    ]
  }): Observable<Post[]> {
    if (pageInfo) {
      filter = {
        offset: pageInfo.offset * pageInfo.limit,
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
}
