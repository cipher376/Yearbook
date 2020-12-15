import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  galleryType = 'local';

  constructor() { }

  ngOnInit() {
  }

  togglePlay(a: any, b: any) {
    a.el.name === 'play' ? a.el.name = 'pause' : a.el.name = 'play';
  }


}
