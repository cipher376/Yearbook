import { UtilityService } from './../providers/utility.service';
import { Address } from './../../../models/address';
import { School, SchoolInterface, SchoolDetailsInterface } from './../../../models/school';
import { PageInfo, getPagedData } from '../../../models/page';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MyStorage } from '../providers/storage/my-storage.service';

export interface Token {
  token: '';
}



@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  redirectUrl = '';

  constructor(private http: HttpClient, private store: MyStorage) {

  }

  createUpdateSchool(school: SchoolInterface): Observable<SchoolInterface> {
    if (school.id) { // perform update
      return this.http.patch<SchoolInterface>('/schools', school).pipe(
        map(res => {
          // console.log(res);
          return school as any;
        }),
        catchError(e => this.handleError(e))
      );
    } else {
      return this.http.post<SchoolInterface>('/schools', school).pipe(
        map(res => {
          // console.log(res);
          return res as any;
        }),
        catchError(e => this.handleError(e))
      );
    }
  }
  createUpdateSchoolDetails(schoolId: number, details: SchoolDetailsInterface): Observable<SchoolDetailsInterface> {
    if (details.id) { // perform update
      return this.http.patch<SchoolInterface>(`/schools/${schoolId}/school-details`, details).pipe(
        map(res => {
          // console.log(res);
          return details as any;
        }),
        catchError(e => this.handleError(e))
      );
    } else {
      return this.http.post<SchoolInterface>(`/schools/${schoolId}/school-details`, details).pipe(
        map(res => {
          // console.log(res);
          return res as any;
        }),
        catchError(e => this.handleError(e))
      );
    }
  }

  createUpdateSchoolAddress(schoolId: number, address: Address): Observable<Address> {
    if (address.id) { // perform update
      return this.http.patch<SchoolInterface>(`/schools/${schoolId}/address`, address).pipe(
        map(res => {
          // console.log(res);
          return address as any;
        }),
        catchError(e => this.handleError(e))
      );
    } else {
      return this.http.post<SchoolInterface>(`/schools/${schoolId}/address`, address).pipe(
        map(res => {
          // console.log(res);
          return res as any;
        }),
        catchError(e => this.handleError(e))
      );
    }
  }

  getSchools(pageInfo?: PageInfo, filter: any = {
    include: [{
      relation: 'address',
    },
    {
      relation: 'photos'
    },
    {
      relation: 'schoolDetails'
    }]
  }): Observable<School[]> {
    if (pageInfo) {
      filter = {
        offset: pageInfo.offset * pageInfo.limit,
        limit: pageInfo.limit,
        // skip: pageInfo.count
        include: [{
          relation: 'address',
        },
        {
          relation: 'schoolDetails'
        },
        {
          relation: 'photos'
        }]
      };
    }
    filter = filter ? '?filter=' + JSON.stringify(filter) : '';
    const url = '/schools' + filter;
    // // console.log(url);
    return this.http.get<School[]>(url).pipe(
      map(res => {
        const schools: School[] = [];
        // console.log(res);
        res.forEach(school => {
          schools.push(this.parseSchool(school));
        });
        this.store.setObject('schools', schools).then(_ => _);
        return schools as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getSchoolDetails(schoolId: string) {
    const filter = {
      include: [
        { relation: 'photos' },
        { relation: 'address' },
        { relation: 'schoolConfig' },
        { relation: 'post' },
        {
          relation: 'alumni',
          scope: {
            include: [
              {
                relation: 'school',
                scope: {
                  include: [
                    { relation: 'photos' }]
                }
              }
            ]
          }
        }
      ]
    };
    const url = `/schools/${schoolId}?filter=` + JSON.stringify(filter);
    return this.http.get<School[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getUserSchools(userId: number) {
    let filter: any = {
      include: [
        { relation: 'photos' },
        { relation: 'address' },
        { relation: 'schoolConfig' },
        { relation: 'post' },
        {
          relation: 'alumni',
          // scope: {
          //   include: [
          //     {
          //       relation: 'school',
          //       scope: {
          //         include: [
          //           { relation: 'photos' }]
          //       }
          //     }
          //   ]
          // }
        }
      ]
    };
    filter = filter ? '?filter=' + JSON.stringify(filter) : '';
    const url = '/schools' + filter;
    // // console.log(url);
    return this.http.get<School[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }
  countSchools(): Observable<number> {
    return this.http.get<School[]>('/schools/count').pipe(
      map(res => {
        if (res) {
          return (res as any).count;
        }
        return 0;
      }),
      catchError(e => this.handleError(e))
    );
  }


  deleteSchool(schoolId: number) {
    return this.http.delete<SchoolInterface>(`/schools/${schoolId}/school-details`).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  /////////////////////////////////////////////////////////////////////////
  /*************Local school access*****/
  ///////////////////////////////////////////////////////////////////////////



  // Read school object from sesson storage
  getSchoolLocal(): Promise<School> {
    return this.store.getObject('school');
  }

  setSchoolLocal(school: School) {
    return this.store.setObject<School>('school', school).then(_ => _);
  }
  deleteSchoolLocal() {
    this.store.remove('school').then(_ => _);
  }




  private handleError(e: any): any {
    // console.log(e);
    return throwError(UtilityService.myHttpErrorFormat(e, 'school'));
  }

  private parseSchool(serverSchool): School {
    const school = new School(serverSchool);
    if (serverSchool?.schoolDetails) {
      school.detail = serverSchool.schoolDetails;
    }
    if (serverSchool?.photos) {
      school.photos = serverSchool.photos;
    }
    if (serverSchool?.address) {
      school.address = serverSchool?.address;
    }
    if (serverSchool?.schoolConfig) {
      school.config = serverSchool?.schoolConfig;
    }
    if (serverSchool?.posts) {
      school.posts = serverSchool?.post;
    }
    return school;
  }
}
