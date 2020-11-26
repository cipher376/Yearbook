import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityPhoto } from 'src/app/models/my-media';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { MySignals } from 'src/app/shared/services/my-signals';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy{

  currentSegment = 'about';
  profile_bio: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, alias Lorem ipsum dolor.';
  username: string = 'Esmeralda Appiah Kubi';

  constructor() { }
  ngOnDestroy(): void {
    
  }

  ngOnInit() {
  }

}
