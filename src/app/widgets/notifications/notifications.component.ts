import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  dismiss(noti: any) {
    noti.style.display = 'none';
    // console.dir(noti)
  }

}
