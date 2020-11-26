import { Photo, IdentityPhoto } from './../../models/my-media';
import { User } from 'src/app/models/user';
import { Component, Input, OnInit, AfterViewInit, AfterContentInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { MySignals } from 'src/app/shared/services/my-signals';
import { SocialService } from 'src/app/shared/services/model-service/social.service';
import { Comment } from './../../models/comment';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/shared/services/model-service/post.service';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, AfterViewInit, AfterContentInit {
  protected comments: Comment[] = [];
  protected creators: User[] = [];
  protected creatorPhotoUrls: string[] = [];

  protected comment: Comment = new Comment();

  protected user: User;
  protected post: Post;

  loading: HTMLIonLoadingElement;

  @Input() showHeader = true;

  @Output() totalComments = new EventEmitter<number>();


  constructor(
    private signals: MySignals,
    private socialService: SocialService,
    private userService: UserService,
    private postService: PostService,
    private toaster: ToasterService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngAfterContentInit(): void {
    // console.log(this.comment);
    // if (this.comment?.postId) {
    //   this.loadPostComments();
    // }
  }

  ngOnInit() {
    this.userService.getUserLocal().then(user => {
      this.user = user;
    });
    // this.postService.getPostLocal().then(post => {
    //   if (post) {
    //     this.post = post;
    //     this.comment.postId = post?.id;
    //     // this.loadPostComments();
    //   }
    // });
  }

  ngAfterViewInit(): void {
    // console.log(this.comment);
    // if (this.comment?.postId) {
    //   this.loadPostComments();
    // }
  }

  close() {
    this.signals.announceCloseModal('comments');
  }

  @Input() set InitiatorId(creatorId: any) {
    this.comment.initiatorId = creatorId ?? this.user?.id;
  }

  @Input() set Message(message: string) {
    this.comment.message = message;
  }

  @Input() set Post(post: Post) {
    // console.log(post);
    if (post?.id && !this.post?.id) {
      this.post = post;
      this.comment.postId = post?.id;
      this.loadPostComments();
    }

  }

  async send() {
    this.comment.initiatorId = this.user?.id;

    if (!this.comment?.message || !this.comment?.postId) {
      await this.toaster.toast('Please say something!');
      return;
    }
    this.socialService.createUpdateComment(this.comment).subscribe(comment => {
      if (comment) {
        // reload comments
        this.comments = [comment, ...this.comments];
        this.comment.message = '';
        this.loadPostComments();
      }
    });
  }

  loadPostComments() {
    if (!this.post?.id) {
      return;
    }
    const pageInfo = { offset: 0, limit: this.showHeader ? 100000 : 3 };
    this.socialService.getPostComments(this.post?.id, pageInfo).subscribe(comments => {
      this.comments = [...comments];
      // console.log(this.comments);
      this.countComments(this.post?.id);
      this.cdr.detectChanges();

      this.getCreators();
    }, error => {
      this.toaster.toast('Check your network');
    });
  }

  getCreatorPhoto(userId: any) {
    return '';
  }

  getCreators() {
    const creatorIds = [];
    this.comments.forEach(comment => {
      if (!creatorIds.includes(comment?.initiatorId)) {
        creatorIds.push(comment?.initiatorId);
      }
    });
    const pageInfo = { offset: 0, limit: 100000 };
    this.userService.getUsersByIds(creatorIds, pageInfo).subscribe(users => {
      this.creators = users;
      this.comments.forEach(c => {
        this.creatorPhotoUrls.push(this.userService.getOwnerImage((this.getCommentUser(c))));
      });
    });
  }

  protected getCommentUser(comment: Comment) {
    for (const user of this.creators) {
      if (user?.id === comment.initiatorId) {
        return user;
      }
    }
  }

  protected countComments(postId: any) {
    this.socialService.countPostComments(postId).subscribe(count => {
      this.totalComments.emit(count);
    });
  }

  gotoProfile(user: User) {
    this.userService.setSelectedUserLocal(user).then(_ => {
      this.router.navigateByUrl('/links/profile');
    });
  }

}
