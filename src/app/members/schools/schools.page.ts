import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { AlumniService } from './../../shared/services/model-service/alumni.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { FeedFilterPopoverComponent } from './../../widgets/feed-filter-popover/feed-filter-popover.component';
import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Alumni } from 'src/app/models/alumni';
import { School } from 'src/app/models/school';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.page.html',
  styleUrls: ['./schools.page.scss'],
})
export class SchoolsPage implements OnInit, AfterViewInit, OnDestroy {
  previousPage = '';
  history$;
  userSchools: School[] = [];
  selectedSchools: School[] = [];
  userAlumni: Alumni[] = [];
  schools;


  constructor(
    public filterPopover: PopoverController,
    private browserHistory: BrowserHistoryService,
    private router: Router,
    private userService: UserService,
    private alumniService: AlumniService,
    private store: MyStorage
    ) {
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });
  }

  ngOnInit() {
    this.store.getObject<Alumni[]>('user-alumni').then(alumni => {
      if (alumni) {
        this.userAlumni = alumni;
        this.userAlumni.forEach(alu => {
          this.userSchools.push(alu.school);
        });
      }
    });
  }
  ngAfterViewInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.filterPopover.create({
      component: FeedFilterPopoverComponent,
      cssClass: 'filter-feed',
      event: ev,
      translucent: true,
      showBackdrop: false
    });
    return await popover.present();
  }
  ngOnDestroy() {
    UtilityService.destroySubscription(this.history$);
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

  gotoSchoolProfile() {
    if (this.userService.isAuthenticated) {
      this.router.navigateByUrl('/links/schools');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  isAuthenticated(){
    return this.userService.isAuthenticated();
  }

  join(school: School){
    
  }

}
