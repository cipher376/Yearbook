import { PageInfo } from '../../models/page';
import { SchoolService } from '../../shared/services/model-service/school.service';
import { AlumniService } from '../../shared/services/model-service/alumni.service';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MySignals } from 'src/app/shared/services/my-signals';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { LoadingController, PopoverController } from '@ionic/angular';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';

@Component({
  selector: 'app-schools-location',
  templateUrl: './schools-location.page.html',
  styleUrls: ['./schools-location.page.scss'],
})
export class SchoolsLocationPage implements OnInit, AfterViewInit, OnDestroy {


  constructor(
    private browserHistory: BrowserHistoryService,
    private router: Router,
    public filterPopover: PopoverController,
    private alumniService: AlumniService,
    private schoolService: SchoolService,
    private userService: UserService,
    private signal: MySignals,
    private store: MyStorage,
    private loadingController: LoadingController,
    private toast: ToasterService
  ) {
    
  }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  
  }

  ngAfterViewInit() {
  }


}
