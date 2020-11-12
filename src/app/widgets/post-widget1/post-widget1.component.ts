import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-widget1',
  templateUrl: './post-widget1.component.html',
  styleUrls: ['./post-widget1.component.scss'],
})
export class PostWidget1Component implements OnInit {

  constructor() { }

  images = [
    'https://i2.wp.com/quidtree.com/wp-content/uploads/2020/01/placeholder.png?fit=750%2C500&ssl=1',
    'https://i2.wp.com/quidtree.com/wp-content/uploads/2020/01/placeholder.png?fit=750%2C500&ssl=1'
  ];
  tags = ["irepmyschool", "back2school2020"];  
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  ngOnInit() {}

}
