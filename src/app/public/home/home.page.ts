import { CreatePostComponent } from './../../widgets/create-post/create-post.component';
import { MySignals } from 'src/app/shared/services/my-signals';
import { PageInfo } from './../../models/page';
import { PostService } from './../../shared/services/model-service/post.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Post } from 'src/app/models/post';
import { IonInfiniteScroll, MenuController, ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { SchoolJoinComponent } from 'src/app/widgets/school-join/school-join.component';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {

  firstname: string;

  postCount = 0; // Total post fetched
  pageNumber = 1;
  limit = 10;

  posts: Post[] = [];

  sub$ = [];
  modal: HTMLIonModalElement;

  infiniteScrollTarget: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  refresherTarget: any;

  showPost = false;

  user: User;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private postService: PostService,
    private signals: MySignals,
    public modalController: ModalController,
    public menuController: MenuController
  ) { }


  ngOnDestroy(): void {
    UtilityService.destroySubscription(this.sub$);
  }

  async ngOnInit() {
    this.sub$.push(this.signals.reloadPostsSource$.subscribe(_ => {
      this.loadRecentPost(true);
    }));

    this.user = await this.userService.getUserLocal();
  }

  ngAfterViewInit(): void {
    this.loadRecentPost();
  }

  getUsername() {
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  gotoLogin() {
    this.router.navigateByUrl('/login');
  }

  loadRecentPost(refresh = false) {
    if (refresh) {
      this.postCount = 0; // reset post count
    }
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

    this.refresherTarget = event.target;
    this.loadRecentPost(true);
  }

  async showPostModal() {
    if (!this.userService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.modal = await this.modalController.create({
      component: CreatePostComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        showHeader: true,
        mediaPage: 'photos'
      }
    });
    this.signals.closeModalSource$.subscribe(log => {
      this.modal.dismiss();
    });
    return await this.modal.present();
  }

  openMenu(menuName: string) {
    this.menuController.open(menuName);
  }

}
