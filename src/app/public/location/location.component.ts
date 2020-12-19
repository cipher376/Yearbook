import { MySignals } from 'src/app/shared/services/my-signals';
import { Component, Input, OnInit } from '@angular/core';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  user: User;
  school: School;
  constructor(
    private signals: MySignals
  ) { }

  ngOnInit(
  ) { }

  @Input() User(user: User) {
    this.user = user;
  }
  @Input() School(school: School) {
    this.school = school;
  }

  closeModals() {
    this.signals.announceCloseModal('location');
  }


}
