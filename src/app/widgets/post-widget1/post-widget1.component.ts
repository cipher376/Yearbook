import { MyShareComponent } from './../my-share/my-share.component';
import { MySignals } from 'src/app/shared/services/my-signals';
import { MediaType, Photo, Video } from './../../models/my-media';
import { PostService } from './../../shared/services/model-service/post.service';
import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { DEFAULT_AUDIO_COVER, DEFAULT_DOCUMENT_COVER, DOWNLOAD_CONTAINER, SERVER_DOWNLOAD_PATH } from 'src/app/shared/config';
import { User } from 'src/app/models/user';
import { School } from 'src/app/models/school';
import { SocialService } from 'src/app/shared/services/model-service/social.service';
import { Like } from 'src/app/models/like';
import { ModalController } from '@ionic/angular';
import { CommentsComponent } from '../comments/comments.component';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Router } from '@angular/router';
import { Shareable } from 'src/app/models/shareable';

@Component({
  selector: 'app-post-widget1',
  templateUrl: './post-widget1.component.html',
  styleUrls: ['./post-widget1.component.scss'],
})
export class PostWidget1Component implements OnInit, AfterViewInit {

  private tags = ['irepmyschool', 'back2school2020'];

  private objects = [];
  mediaType: MediaType;

  protected post: Post;
  postUserImage = '';
  postUser: User;
  school: School;

  likes: Like[] = [];
  disLikes: Like[] = [];

  totalComments = 0;

  modal;

  @ViewChild(MyShareComponent) myShareComponent: MyShareComponent;


  constructor(
    private postService: PostService,
    private socialService: SocialService,
    public modalController: ModalController,
    private signals: MySignals,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.getLikes();
  }

  @Input() set Post(post: Post) {
    this.post = post;
    // console.log(this.objects);
    this.postUserImage = this.userService.getOwnerImage(post?.user);
    this.postUser = this.post?.user;
    this.school = this.post?.school;

    if (post?.photos?.length > 0) {
      this.objects = post?.photos;
      this.mediaType = MediaType.PHOTO;
    } else if (post?.videos?.length > 0) {
      this.objects = post?.videos;
      this.mediaType = MediaType.VIDEO;
    } else if (post?.audios?.length > 0) {
      this.objects = post?.audios;
      this.mediaType = MediaType.AUDIO;
    } else if (post?.documents?.length > 0) {
      this.objects = post?.documents;
      this.mediaType = MediaType.DOCUMENT;
    }
  }


  get Post() {
    return this.post;
  }
  set TotalComments(total: number) {
    this.totalComments = total;
  }

  getLikes() {
    this.socialService.getPostLikes(this.post?.id).subscribe(affections => {
      this.likes = [];
      this.disLikes = [];
      affections?.forEach(affection => {
        if (affection.rate) { this.likes.push(affection); } else {
          this.disLikes.push(affection);
        }
      });
    });
  }

  async comment() {
    // await this.postService.setPostLocal(this.post);
    this.modal = await this.modalController.create({
      component: CommentsComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        Post: this.post
      }
    });
    this.signals.closeModalSource$.subscribe(name => {
      if (name === 'comments') {
        this.modal.dismiss();
      }
    });
    return await this.modal.present();
  }

  gotoProfile() {
    this.userService.setSelectedUserLocal(this.postUser).then(_ => {
      this.router.navigateByUrl('/links/profile');
    });
  }

  share() {
    let fileUrl = '';
    let image = '';

    if (this.objects?.length > 0) {
      fileUrl = DOWNLOAD_CONTAINER + this.objects[0]?.fileName;
      if (this.mediaType === MediaType.PHOTO) {
        image = DOWNLOAD_CONTAINER + ( this.objects[0] as Photo).fileName;
      } else if (this.mediaType === MediaType.VIDEO) {
        image =  DOWNLOAD_CONTAINER + ( this.objects[0] as Video).posterUrl;
      } else if (this.mediaType === MediaType.AUDIO) {
        image =  DEFAULT_AUDIO_COVER;
      } else if (this.mediaType === MediaType.DOCUMENT) {
        image =  DEFAULT_DOCUMENT_COVER;
      }
    }

    const shareable: Shareable = {
      message: this.post?.message,
      subject: 'Yearbook Post',
      url: fileUrl,
      image,
      emailRecipients: []
    };

    this.myShareComponent.share(shareable);
  }

}
