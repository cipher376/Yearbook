import { MySignals } from './../my-signals';
import { UtilityService } from './../providers/utility.service';
import { Address } from './../../../models/address';
import { School, SchoolInterface, SchoolDetailsInterface } from './../../../models/school';
import { PageInfo, getPagedData } from '../../../models/page';
import { Router } from '@angular/router';
import { API_ROOT_URL } from '../../config';
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

  constructor(private http: HttpClient, private store: MyStorage,
    private signals: MySignals) {

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
        }]
      };
    }
    filter = filter ? 'filter=' + JSON.stringify(filter) : '';
    const url = '/schools?' + filter;
    // // console.log(url);
    return this.http.get<School[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  searchSchool(searchKey = 'all', pageInfo?: PageInfo): Observable<School[]> {
    let filter = {};
    if (pageInfo) {
      filter = {
        offset: pageInfo.offset,
        limit: pageInfo.limit,
      };
    }
    if (!searchKey) {
      searchKey = 'all';
    }
    const url = '/schools-search/' + searchKey + '?filter=' + JSON.stringify(filter) ?? '';
    console.log(url);
    return this.http.get<School[]>(url).pipe(
      map(res => {
        console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }


  getSchoolDetails(schoolId: any) {
    const filter = {
      include: [
        // { relation: 'photos' },
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
  countSchools(): Observable<number> {
    return this.http.get<School[]>('/schools/count').pipe(
      map(res => {
        if (res) {
          this.signals.announceSchoolsCount((res as any).count);
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


  getUserSchools(userId: any): Observable<School[]> {
    const filter = {
      include: [
        { relation: 'address' },
        { relation: 'schoolDetails' },
        { relation: 'photos' }
      ]
    } as any;

    // console.log(filter);
    const url = `/users/${userId}/schools?filter=` + JSON.stringify(filter);
    return this.http.get<School[]>(url).pipe(
      map(res => {
        // console.log(res);
        return this.flattenSchools(res) as any;
      }),
      catchError(e => this.handleError(e))
    );

  }


  /////////////////////////////////////////////////////////////////////////
  /*************Local school access*****/
  ///////////////////////////////////////////////////////////////////////////



  // Read school object from sesson storage
  async getSchoolLocal(): Promise<School> {
    return this.store.getObject('selectedSchool');
  }
  async setSchoolLocal(school: School) {
    this.signals.announceSchool(school);
    return this.store.setObject('selectedSchool', school);
  }

  async deleteSchoolLocal() {
    this.signals.announceSchool(null);
    this.store.remove('selectedSchool');
  }


  ////////////////////////////////////////////////////////////
  /**********************Helper function ******************* */
  ////////////////////////////////////////////////////////////

  flattenSchools(schools: any[]) {
    const returnSchools: School[] = [];
    schools.forEach(school => {
      returnSchools.push(new School(school, school?.schoolDetails))
    });
    // console.log(returnSchools);
    return returnSchools;
  }

  flattenSchool(school: any) {
    return new School(school, school?.schoolDetails)
  }



  private handleError(e: any): any {
    // console.log(e);
    return throwError(UtilityService.myHttpErrorFormat(e, 'school'));
  }
}
