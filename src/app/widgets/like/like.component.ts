import { UserService } from './../../shared/services/model-service/user.service';
import { SocialService } from './../../shared/services/model-service/social.service';
import { Like } from './../../models/like';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

enum EntityToLike {
  post = 1,
  comment = 2,
  user = 3
}
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit, AfterViewInit {
  protected affection: Like;
  @Input() likeCount = 0;
  // event
  @Output() reload = new EventEmitter<boolean>();

  user: User;
  @Input() entityToLike: EntityToLike = EntityToLike.post;

  constructor(
    private socialService: SocialService,
    private userService: UserService
  ) {
    this.affection = new Like();
  }


  ngAfterViewInit(): void {
      // get like
  }

  async ngOnInit() {
    this.user = await this.userService.getUserLocal();
    this.getLike();

    console.log(this.user.id);

  }

  // set InitiatorId(id: any) {
  //   this.affection.initiatorId = id;
  // }
  @Input() set ReceiverId(id: any) {
    this.affection.receiverId = id;
  }
  @Input() set ReceiverName(name: string) {
    this.affection.receiverName = name.toLowerCase();
  }

  like() {
    this.affection.rate = !this.affection.rate; // toggle
    this.affection.initiatorId = this.user?.id;
    this.socialService.likeOrDislike(this.affection).subscribe(affection => {
      if (affection?.id) {
        this.affection = affection;
      }
      this.reload.emit(true);
    });
  }


  getLike() {
    this.socialService.getLike(this.user?.id, this.affection.receiverId).subscribe(aff => {
      console.log(aff)
      if (aff?.id) {
        this.affection = aff;
      }
    });
  }

}
