import { UserService } from 'src/app/shared/services/model-service/user.service';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { Degree, DEGREE_TYPES } from './../../models/degree';
import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumni, AlumniInterface } from 'src/app/models/alumni';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { MySignals } from 'src/app/shared/services/my-signals';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { AlumniService } from 'src/app/shared/services/model-service/alumni.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-school-join',
  templateUrl: './school-join.component.html',
  styleUrls: ['./school-join.component.scss'],
})
export class SchoolJoinComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  previousPage = '';
  history$;

  school: School;
  user: User;
  public aluForm: FormGroup;
  public alumnus: Alumni = new Alumni();

  sub$ = [];

  degreeTypes = DEGREE_TYPES;

  constructor(
    private router: Router,
    private schoolService: SchoolService,
    private fb: FormBuilder,
    private signals: MySignals,
    private alumniService: AlumniService,
    private toaster: ToasterService,
    private userService: UserService,
  ) {

  }


  ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }

  ngOnInit() {
    this.createAlumnusForm();
  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    this.userService.getUserLocal().then(user => {
      this.user = user;
      console.log(this.user);
    });

    this.schoolService.getSchoolLocal().then(school => {
      this.school = school;
      console.log(school);
    });
  }

  createAlumnusForm() {
    this.alumnus.degree = this.alumnus.degree ? this.alumnus.degree : new Degree();
    this.aluForm = this.fb.group({
      yearStarted: [this.alumnus.yearStarted,
      [
        Validators.required
      ]
      ],
      yearCompleted: [
        this.alumnus.yearCompleted,
        [
          Validators.required
        ]
      ],
      schoolIndexNumber: [
        this.alumnus?.schoolIndexNumber,
        [
          Validators.minLength(1),
          Validators.maxLength(100)
        ]
      ],
      degreeName: [
        this.alumnus?.degree?.name,
        [
          Validators.minLength(4),
          Validators.maxLength(100)
        ]
      ],
      degreeType: [
        this.alumnus?.degree?.type,
        [
          Validators.minLength(4),
          Validators.maxLength(100)
        ]
      ],
      degreeProgramme: [
        this.alumnus?.degree?.programme,
        [
          Validators.minLength(4),
          Validators.maxLength(100)
        ]
      ],
      degreeCgpa: [
        this.alumnus?.degree?.cgpa == 0 ? '' : this.alumnus?.degree?.cgpa,
        [
          Validators.minLength(1),
          Validators.maxLength(5)
        ]
      ]
    });
  }



  findSchool() {
    this.router.navigateByUrl('/links/schools-search');
  }

  closeModals() {
    this.signals.announceCloseModal();
  }

  save() {
    const info: AlumniInterface = this.alumnus.info;
    info.userId = this.user?.id;
    info.yearStarted = this.aluForm.value.yearStarted ? this.aluForm.value.yearStarted : info.yearStarted;
    info.schoolId = this.school?.id;
    // range picker assigned to year started
    info.yearCompleted = this.aluForm.value.yearCompleted ? this.aluForm.value.yearCompleted : info.yearCompleted;
    info.schoolIndexNumber = this.aluForm.value.schoolIndexNumber ? this.aluForm.value.schoolIndexNumber : info.schoolIndexNumber;

    try {
      info.userId = parseInt('' + info.userId, 10);
      info.schoolId = parseInt('' + info.schoolId, 10);
    } catch (e) {

    }

    const degree: Degree = this.alumnus.degree || new Degree();

    degree.cgpa = this.aluForm.value.degreeCgpa || 0;
    degree.name = this.aluForm.value.degreeName || '';
    degree.type = this.aluForm.value.degreeType || '';
    degree.programme = this.aluForm.value.degreeProgramme || '';
    try {
      degree.cgpa = parseInt('' + degree.cgpa, 10);
    } catch (e) {

    }
    console.log(degree);
    console.log(info);
    if (!(info.userId && info.yearStarted && info.schoolId && info.yearCompleted)) {
      this.toaster.toast('Please provide for all required fields');
      return;
    }
    this.alumniService.createOrUpdateAlumni(new Alumni(info).info).subscribe(alumnus => {
      console.log(alumnus);
      if (alumnus) {
        this.alumnus.info = alumnus;
        if (degree.name || degree.type || degree.programme) {
          // create the degree object
          this.alumniService.createOrUpdateDegree(this.alumnus.id, degree).subscribe(deg => {
            this.toaster.toast('You are now alumni of ' + this.school?.name);
            this.closeModals();
            this.alumnus.degree = deg;
          });
        } else {
          this.toaster.toast('You are now alumni of ' + this.school?.name);
          this.closeModals();
        }

        // trigger User schools reload
        this.signals.announceUserSchoolsReload();
      }
    }, error => {
      this.toaster.toast(error.message, error.title);
    });

  }

  cancel() {
    this.closeModals();
  }


  setAlumni() {
    if (this.aluForm.value.userId && this.aluForm.value.schoolId) {
      this.alumniService.getAlumni(null, this.aluForm.value.userId, this.aluForm.value.schoolId).subscribe(alus => {
        if (alus?.length > 0) {
          this.alumnus = new Alumni(alus[0]);
          console.log(this.alumnus);
          this.createAlumnusForm();
        } else {
          const aluPartial: any = {
            userId: this.aluForm.value.userId,
            schoolId: this.aluForm.value.schoolId
          };
          this.alumnus = new Alumni(aluPartial);
          this.createAlumnusForm();
        }
      });
    }
  }

  clear() {
    this.alumnus = new Alumni();
    this.createAlumnusForm();
  }

}
