import { SchoolService } from './../../shared/services/model-service/school.service';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { School } from 'src/app/models/school';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schools-join',
  templateUrl: './schools-join.page.html',
  styleUrls: ['./schools-join.page.scss'],
})
export class SchoolsJoinPage implements OnInit, AfterViewInit, AfterContentInit {
  previousPage = '';
  history$;

  school: School;
  public joinForm: FormGroup;
  constructor(private browserHistory: BrowserHistoryService,
    private router: Router, private schoolService: SchoolService,
    private fb: FormBuilder,
    ) {
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });
  }

  ngOnInit() {
    this.initForm();
  }
  
  ngAfterViewInit() {
    this.schoolService.getSchoolLocal().then(school => {
      this.school = school;
      console.log(school);
    });
  }

  ngAfterContentInit(){
    this.schoolService.getSchoolLocal().then(school => {
      this.school = school;
      console.log(school);
    });
  }

  initForm(){
    
    this.joinForm = this.fb.group({
      yearStarted: [
        undefined,
        [
          Validators.required,
        ]
      ],
      yearCompleted: [
         '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(30)
        ]
      ],
      // degreeName: [
      //   '',
      //   [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      // ],
      // degreeType: [
      //   '',
      //   [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      // ],
      // program: [
      //   '',
      //   [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      // ],
      // cgpa: [
      //   '',
      //   [ Validators.minLength(1), Validators.maxLength(3)]
      // ],
      
    });
  }
  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
  findSchool() {
    this.router.navigateByUrl('/links/schools-search');
  }
}
