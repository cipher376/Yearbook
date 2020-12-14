import { MySignals } from 'src/app/shared/services/my-signals';
import { Follow } from './../../models/follow';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocialService } from 'src/app/shared/services/model-service/social.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss'],
})
export class FollowComponent implements OnInit, AfterViewInit {
  _follow: Follow;
  @Input() color = 'medium';
  @Input() modelName;

  // event
  @Output() reload = new EventEmitter<boolean>();
  isFollowing = false;


  constructor(
    private socialService: SocialService,
    private signals: MySignals
  ) {
    this._follow = new Follow();
  }


  ngAfterViewInit(): void {
    // // check if follow exist
    if (!this._follow?.id) {
      // get follow
      this.getFollow();
    }
  }

  ngOnInit() {
  }

  @Input() set LeaderId(id: any) {
    this._follow.leaderId = id;
    if (this._follow?.followerId) {
      this.getFollow();
    }
  }

  @Input() set FollowerId(id: any) {
    this._follow.followerId = id;
    if (this._follow?.leaderId) {
      this.getFollow();
    }
  }


  follow() {
    if (!this._follow.leaderId && !this._follow.followerId && !this.modelName) {
      return;
    }
    this._follow.isFollowing = !this._follow.isFollowing;
    this._follow.lastModified = new Date(Date.now());
    this._follow.leaderModelName = (this.modelName + '').toLowerCase();
    this.socialService.followOrUnfollow(this._follow).subscribe(follow => {
      if (follow?.id) {
        this._follow = follow;
        this.isFollowing = follow?.isFollowing;
      }
      if (follow.isFollowing) {
        this.signals.announceFollowed(true);
      } else {
        this.signals.announceFollowed(false);

      }
      this.reload.emit(true);
    });
  }


  getFollow() {
    this.socialService.getFollow(this._follow?.leaderId, this._follow?.followerId).subscribe(f => {
      if (f?.length > 0) {
        this._follow = f[0];
        // console.log(this._follow);
        this.isFollowing = this._follow?.isFollowing;
      } else {
        this.isFollowing = false;
      }
    });
  }

}