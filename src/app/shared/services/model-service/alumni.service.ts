import { AlumniInterface } from './../../../models/alumni';
import { Degree } from './../../../models/degree';
import { UtilityService } from './../providers/utility.service';
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
export class AlumniService {


  constructor(private http: HttpClient,
    private store: MyStorage) {

  }

  createOrUpdateAlumni(alumni: AlumniInterface) {
    if (alumni.id) { // perform update
      return this.http.patch<Alumni>(`/alumni/${alumni.id}`, alumni).pipe(
        map(res => {
          // console.log(res);
          return alumni as any;
        }),
        catchError(e => this.handleError(e))
      );
    } else {
      return this.http.post<Alumni>(`/alumni/`, alumni).pipe(
        map(res => {
          // console.log(res);
          return res as any;
        }),
        catchError(e => this.handleError(e))
      );
    }
  }

  getAlumni(pageInfo?: PageInfo, userId?: number, schoolId?: number): Observable<Alumni[]> {
    const filter = {
      include: [
        { relation: 'user' },
        { relation: 'school' },
        { relation: 'degree' },
        // { relation: 'post' }
      ]
    } as any;
    if (pageInfo) {
      filter.offset = pageInfo.offset * pageInfo.limit;
      filter.limit = pageInfo.limit;
    }
    if (schoolId) {
      filter.where = {
        schoolId
      };
    }

    if (userId) {
      filter.where.userId = userId;
    }
    // console.log(filter);
    const url = `/alumni?filter=` + JSON.stringify(filter);
    return this.http.get<Alumni[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }


  getAlumniByUserId(pageInfo?: PageInfo, userId?: number, schoolId?: number): Observable<Alumni[]> {
    const filter = {
      include: [
        { relation: 'user' },
        {
          relation: 'school',
          scope: {
            include: [
              { relation: 'photos' },
              { relation: 'address' },
              { relation: 'schoolConfig' },
              { relation: 'post' },
            ]
          }
        },
        { relation: 'degree' }
      ]
    } as any;
    if (pageInfo) {
      filter.offset = pageInfo.offset * pageInfo.limit;
      filter.limit = pageInfo.limit;
    }
    if (schoolId) {
      filter.where = {
        schoolId
      };
    }

    if (userId) {
      filter.where.userId = userId;
    }
    // console.log(filter);
    const url = `/alumni?filter=` + JSON.stringify(filter);
    return this.http.get<Alumni[]>(url).pipe(
      map(res => {
        // console.log(res);
        this.store.setObject('user-alumni', res).then(_ => _);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getAlumniByIds(ids: string[], pageInfo?: PageInfo): Observable<Alumni[]> {
    let filter;
    if (pageInfo) {
      filter = {
        offset: pageInfo.offset * pageInfo.limit,
        limit: pageInfo.limit,
        where: {
          id: { inq: ids }
        },
      };
    }
    const url = '/alumni?filter=' + JSON.stringify(filter);
    return this.http.get<Alumni[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getAlumniById(alumniId: number) {
    const filter = {
      // include: [
      //   { relation: 'photos' },
      //   { relation: 'address' },
      //   { relation: 'alumniConfig' },
      //   { relation: 'post' },
      //   {
      //     relation: 'alumni',
      //     scope: {
      //       include: [
      //         {
      //           relation: 'school',
      //           scope: {
      //             include: [
      //               { relation: 'photos' }]
      //           }
      //         }
      //       ]
      //     }
      //   }
      // ]
    };
    const url = `/alumni/${alumniId}?filter=` + JSON.stringify(filter);
    return this.http.get<Alumni[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }



  countAlumni(schoolId?: number): Observable<number> {
    const filter = {} as any;

    if (schoolId) {
      filter.where = {
        schoolId
      };
    }
    return this.http.get<Alumni[]>('/alumni/count?filter=' + JSON.stringify(filter)).pipe(
      map(res => {
        if (res) {
          return (res as any).count;
        }
        return 0;
      }),
      catchError(e => this.handleError(e))
    );
  }

  /////////////////////////////////////////////////////////////////////////
  /*************Local alumni access*****/
  ///////////////////////////////////////////////////////////////////////////

  createOrUpdateDegree(alumniId: number, degree: Degree) {
    if (degree.id) { // perform update
      return this.http.patch<Degree>(`/alumni/${alumniId}/degree`, degree).pipe(
        map(res => {
          // console.log(res);
          return degree as any;
        }),
        catchError(e => this.handleError(e))
      );
    } else {
      return this.http.post<Degree>(`/alumni/${alumniId}/degree`, degree).pipe(
        map(res => {
          // console.log(res);
          return res as any;
        }),
        catchError(e => this.handleError(e))
      );
    }
  }


  /////////////////////////////////////////////////////////////////////////
  /*************Local alumni access*****/
  ///////////////////////////////////////////////////////////////////////////



  // Read alumni object from sesson storage
  getAlumniLocal(): Promise<Alumni> {
    return this.store.getObject('alumni');
  }

  deleteAlumniLocal() {
    this.store.remove('alumni').then(_ => _);
  }




  private handleError(e: any): any {
    // console.log(e);
    return throwError(UtilityService.myHttpErrorFormat(e, 'alumni'));
  }
}
