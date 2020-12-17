import { PushMessage } from './../../models/push-message';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  message: PushMessage;
  // el: any;

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() { }

  dismiss() {
    this.el.style.display = 'none';
    this.message = new PushMessage();
  }

  set Message(msg: PushMessage) {
    this.message = msg;
  }

  show(msg: PushMessage) {
    this.message = msg;
    setTimeout(() => {
      this.dismiss();
    }, 10000);
  }

}
