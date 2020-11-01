import { MySignals } from 'src/app/shared/services/my-signals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post1',
  templateUrl: './create-post1.page.html',
  styleUrls: ['./create-post1.page.scss'],
})
export class CreatePostPage1 implements OnInit {

  logs = [];
  constructor(
    private signals: MySignals
  ) { }

  ngOnInit() {
    this.signals.loggerSource$.subscribe(log => {
      this.logs.push(JSON.stringify(log));
    });
  }

  closeModals(){
    this.signals.announceCloseModal();
  }

}
