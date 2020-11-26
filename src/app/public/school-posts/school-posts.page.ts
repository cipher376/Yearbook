import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Photo, MediaType } from 'src/app/models/my-media';
import { PageInfo } from 'src/app/models/page';
import { Post } from 'src/app/models/post';
import { School } from 'src/app/models/school';
import { PostService } from 'src/app/shared/services/model-service/post.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-school-posts',
  templateUrl: './school-posts.page.html',
  styleUrls: ['./school-posts.page.scss'],
})
export class SchoolPostsPage implements OnInit, AfterViewInit {
  school: School;
  schoolPhotos: Photo[] = [{
    fileName: '1605080601901.jpg',
    fileUrl: '/1605080601901.jpg',
    id: 1,

  } as Photo];
  mediaType: MediaType = MediaType.PHOTO;


  postCount = 0; // Total post fetched
  pageNumber = 1;
  limit = 20;

  posts: Post[] = [];

  sub$ = [];

  infiniteScrollTarget: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  refresherTarget: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private postService: PostService,
    private schoolService: SchoolService
  ) { }


  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.schoolService.getSchoolLocal().then(school => {
      this.school = school;
      this.loadSchoolPosts();
    });
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  gotoLogin() {
    this.router.navigateByUrl('/login');
  }

  loadSchoolPosts(refresh = false) {
    const pageInfo: PageInfo = {
      offset: this.postCount,
      limit: this.limit,
    };

    this.postService.getSchoolPosts(this.school?.id, pageInfo).subscribe(posts => {
      this.postCount += posts?.length;
      this.infiniteScrollTarget?.complete();
      this.refresherTarget?.complete();
      console.log(posts);

      if (refresh) {
        this.posts = posts;
        return;
      }
      this.posts = [...this.posts, ...posts];

    });
  }

  loadMorePosts(event) {
    this.infiniteScrollTarget = event.target;
    this.loadSchoolPosts();
  }

  refreshPosts(event) {
    this.postCount = 0; // reset post count
    this.refresherTarget = event.target;
    this.loadSchoolPosts(true); //true -> start from the beginning
  }
}
