import { Alumni } from './../../models/alumni';
import { MyStorage } from './providers/storage/my-storage.service';
import { School } from './../../models/school';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class MySignals {

  constructor(private store: MyStorage) { }

  private selectedUsersSource = new Subject<User[]>();
  selectedUsersSource$ = this.selectedUsersSource.asObservable();

  private selectedSchoolsSource = new Subject<School[]>();
  selectedSchoolsSource$ = this.selectedSchoolsSource.asObservable();
  private selectedSchoolSource = new Subject<School>();
  selectedSchoolSource$ = this.selectedSchoolSource.asObservable();


  private selectedAlumniSource = new Subject<Alumni[]>();
  selectedAlumniSource$ = this.selectedAlumniSource.asObservable();
  private selectedAlumnusSource = new Subject<Alumni>();
  selectedAlumnusSource$ = this.selectedAlumnusSource.asObservable();

  announceSelectedUsers(users: User[]) {
    this.selectedUsersSource.next(users);
  }

  announceSelectedSchools(schools: School[]) {
    this.selectedSchoolsSource.next(schools);
  }
  announceSchool(school: School) {
    this.selectedSchoolSource.next(school);
  }

  announceAlumni(alumni: Alumni[]) {
    this.selectedAlumniSource.next(alumni);
  }

  announceAlumnus(alumnus: Alumni) {
    this.selectedAlumnusSource.next(alumnus);
  }
}
