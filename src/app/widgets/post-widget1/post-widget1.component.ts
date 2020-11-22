import { MediaType } from './../../models/my-media';
import { PostService } from './../../shared/services/model-service/post.service';
import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { SERVER_DOWNLOAD_PATH } from 'src/app/shared/config';
import { User } from 'src/app/models/user';
import { School } from 'src/app/models/school';

@Component({
  selector: 'app-post-widget1',
  templateUrl: './post-widget1.component.html',
  styleUrls: ['./post-widget1.component.scss'],
})
export class PostWidget1Component implements OnInit, AfterViewInit {


  private tags = ['irepmyschool', 'back2school2020'];

  private objects = [];
  mediaType: MediaType;

  private post: Post;
  userImage = '';
  user: User;
  school: School;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {

  }

  @Input() set Post(post: Post) {
    this.post = post;
    // console.log(this.objects);
    this.userImage = this.postService.getPostOwnerImage(post);
    this.user = this.post?.user;
    this.school = this.post?.school;

    if (post?.photos) {
      this.objects = post?.photos;
      this.mediaType = MediaType.PHOTO;
    } else if (post?.videos) {
      this.objects = post?.videos;
      this.mediaType = MediaType.VIDEO;
    } else if (post?.audios) {
      this.objects = post?.audios;
      this.mediaType = MediaType.AUDIO;
    } else if (post?.documents) {
      this.objects = post?.documents;
      this.mediaType = MediaType.DOCUMENT;
    }
  }


  get Post() {
    return this.post;
  }

}
