import { Alumni } from './../../models/alumni';
import { MyStorage } from './providers/storage/my-storage.service';
import { School } from './../../models/school';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../models/user';
import { Photo, Video } from 'src/app/models/my-media';
import { LatLng } from 'src/app/models/latLng';

@Injectable({
  providedIn: 'root'
})
export class MySignals {

  constructor(private store: MyStorage) { }

  private loggerSource = new Subject<any>();
  loggerSource$ = this.loggerSource.asObservable();

  private closeModalSource = new Subject<any>();
  closeModalSource$ = this.closeModalSource.asObservable();


  private selectedUsersSource = new Subject<User[]>();
  selectedUsersSource$ = this.selectedUsersSource.asObservable();

  private selectedSchoolsSource = new Subject<School[]>();
  selectedSchoolsSource$ = this.selectedSchoolsSource.asObservable();
  private selectedSchoolSource = new Subject<School>();
  selectedSchoolSource$ = this.selectedSchoolSource.asObservable();
  private countSchoolSource = new Subject<number>();
  countSchoolSource$ = this.countSchoolSource.asObservable();




  private selectedAlumniSource = new Subject<Alumni[]>();
  selectedAlumniSource$ = this.selectedAlumniSource.asObservable();
  private selectedAlumnusSource = new Subject<Alumni>();
  selectedAlumnusSource$ = this.selectedAlumnusSource.asObservable();
  private selectedSchoolAlumniCountSource = new Subject<number>();
  selectedSchoolAlumniCountSource$ = this.selectedSchoolAlumniCountSource.asObservable();




  private imagesLoadedSource = new Subject<Photo[]>();
  imagesLoadedSource$ = this.imagesLoadedSource.asObservable();

  private videosLoadedSource = new Subject<Video[]>();
  videosLoadedSource$ = this.videosLoadedSource.asObservable();

  private profilePhotoChangeSource = new Subject<Photo>();
  profilePhotoChangeSource$ = this.profilePhotoChangeSource.asObservable();

  private flagPhotoChangeSource = new Subject<Photo>();
  flagPhotoChangeSource$ = this.flagPhotoChangeSource.asObservable();

  private coverPhotoChangeSource = new Subject<Photo>();
  coverPhotoChangeSource$ = this.coverPhotoChangeSource.asObservable();


  private locationChangeSource = new Subject<LatLng>();
  locationChangeSource$ = this.locationChangeSource.asObservable();



  // private selectedPoliciesSource = new Subject<Policy[]>();
  // selectedPoliciesSource$ = this.selectedPoliciesSource.asObservable();
  // private selectedPolicySource = new Subject<Policy>();
  // selectedPolicySource$ = this.selectedPolicySource.asObservable();
  // private countPolicySource = new Subject<number>();
  // countPolicySource$ = this.countPolicySource.asObservable();
  // private policyChangeSource = new Subject<boolean>();
  // policyChangeSource$ = this.policyChangeSource.asObservable();

  // private selectedRolesSource = new Subject<Role[]>();
  // selectedRolesSource$ = this.selectedRolesSource.asObservable();
  // private selectedRoleSource = new Subject<Role>();
  // selectedRoleSource$ = this.selectedRoleSource.asObservable();
  // private countRoleSource = new Subject<number>();
  // countRoleSource$ = this.countRoleSource.asObservable();
  // private newRoleSource = new Subject<Policy>();
  // newRoleSource$ = this.newRoleSource.asObservable();

  log(data: any) {
    this.loggerSource.next(data);
  }
  announceCloseModal(data?: any) {
    this.closeModalSource.next(data);
  }

  announceSelectedUsers(users: User[]) {
    this.selectedUsersSource.next(users);
  }

  announceSelectedSchools(schools: School[]) {
    this.selectedSchoolsSource.next(schools);
  }
  announceSchool(school: School) {
    this.selectedSchoolSource.next(school);
  }
  announceSchoolsCount(total: number) {
    this.countSchoolSource.next(total);
  }

  announceSelectedSchoolAlumniCount(total: number) {
    this.selectedSchoolAlumniCountSource.next(total);
  }

  announceAlumni(alumni: Alumni[]) {
    this.selectedAlumniSource.next(alumni);
  }

  announceAlumnus(alumnus: Alumni) {
    this.selectedAlumnusSource.next(alumnus);
  }

  announceImagesLoaded(photos: Photo[]) {
    this.imagesLoadedSource.next(photos);
  }
  announceVideosLoaded(videos: Video[]) {
    this.videosLoadedSource.next(videos);
  }

  announceProfilePhotoChange(photo: Photo) {
    this.profilePhotoChangeSource.next(photo);
  }

  announceCoverPhotoChange(photo: Photo) {
    this.coverPhotoChangeSource.next(photo);
  }

  announceFlagPhotoChange(photo: Photo) {
    this.flagPhotoChangeSource.next(photo);
  }

  announceLocationChange(latLng: LatLng) {
    this.locationChangeSource.next(latLng);
  }



  // announceSelectedPolicies(policy: Policy[]) {
  //   this.selectedPoliciesSource.next(policy);
  // }
  // announcePolicy(policy: Policy) {
  //   this.selectedPolicySource.next(policy);
  // }
  // announcePoliciesCount(total: number) {
  //   this.countPolicySource.next(total);
  // }
  // announcePolicyChange(changed: boolean) {
  //   this.policyChangeSource.next(changed);
  // }


  // announceSelectedRoles(role: Role[]) {
  //   this.selectedRolesSource.next(role);
  // }
  // announceRole(role: Role) {
  //   this.selectedRoleSource.next(role);
  // }
  // announceRolesCount(total: number) {
  //   this.countRoleSource.next(total);
  // }
  // announceNewRole(role: Policy) {
  //   this.newRoleSource.next(role);
  // }
}
