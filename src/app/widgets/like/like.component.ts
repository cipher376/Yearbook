import { SocialService } from './../../shared/services/model-service/social.service';
import { Like } from './../../models/like';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit, AfterViewInit {
  protected affection: Like;

  // event
  @Output() reload = new EventEmitter<boolean>();


  constructor(
    private socialService: SocialService
  ) {
    this.affection = new Like();
  }


  ngAfterViewInit(): void {
    // check if like exist
    if (!this.affection?.id) {
      // get like
      this.getLike();
    }

  }

  ngOnInit() {
  }

  @Input() set InitiatorId(id: any) {
    this.affection.initiatorId = id;
  }
  @Input() set ReceiverId(id: any) {
    this.affection.receiverId = id;
  }
  @Input() set ReceiverName(name: string) {
    this.affection.receiverName = name.toLowerCase();
  }

  like() {
    this.affection.rate = !this.affection.rate; // toggle
    this.socialService.likeOrDislike(this.affection).subscribe(affection => {
      if (affection?.id) {
        this.affection = affection;
      }
      this.reload.emit(true);
    });
  }


  getLike() {
    this.socialService.getLike(this.affection?.initiatorId, this.affection.receiverId).subscribe(aff => {
      if (aff?.id) {
        this.affection = aff;
      }
    });
  }

}
