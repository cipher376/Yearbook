import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentSegment = 'about';
  profile_bio: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, alias Lorem ipsum dolor.';
  username: string = 'Esmeralda Appiah Kubi';

  constructor() { }

  ngOnInit() {
  }

}
