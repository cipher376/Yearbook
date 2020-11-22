import { PageInfo } from './../../models/page';
import { PostService } from './../../shared/services/model-service/post.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Post } from 'src/app/models/post';
import { IonInfiniteScroll } from '@ionic/angular';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  firstname: string;

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
    private postService: PostService
  ) { }


  ngOnDestroy(): void {
    UtilityService.destroySubscription(this.sub$);
  }

  ngOnInit() {
    this.loadRecentPost();
  }

  getUsername() {
    if (this.isAuthenticated()) {
      this.userService.getUserLocal().then(
        user => this.firstname = user?.firstName
      );
    }
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  gotoLogin() {
    this.router.navigateByUrl('/login');
  }

  loadRecentPost(refresh = false) {
    const pageInfo: PageInfo = {
      offset: this.postCount,
      limit: this.limit,
    };

    this.postService.getPost(pageInfo).subscribe(posts => {
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
    this.loadRecentPost();
  }

  refreshPosts(event) {
    this.postCount = 0; // reset post count
    this.refresherTarget = event.target;
    this.loadRecentPost(true);
  }

}
