import { MySignals } from 'src/app/shared/services/my-signals';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { MediaService } from 'src/app/shared/services/model-service/media.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { AlertController, IonInfiniteScroll } from '@ionic/angular';
import { Photo } from 'src/app/models/my-media';
import { User } from 'src/app/models/user';
import { PhotoLocal } from 'src/app/models/LocalMediaInterfaces';
import { PageInfo } from 'src/app/models/page';

@Component({
  selector: 'app-user-cloud-photos',
  templateUrl: './user-cloud-photos.component.html',
  styleUrls: ['./user-cloud-photos.component.scss'],
})
export class UserCloudPhotosComponent implements OnInit, OnDestroy {

  protected cloudPhotos: Photo[] = [];
  selectedCloudPhotos: Photo[] = [];

  @Input() returnPhotosCount = 1;

  @Output() isSelected = new EventEmitter<Photo[] | PhotoLocal[]>();

  private user: User;

  infiniteScrollTarget: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  photoCount = 0; // Total post fetched
  pageNumber = 1;
  limit = 10;


  constructor(
    private alertController: AlertController,
    private mediaService: MediaService,
    private toaster: ToasterService,
    private signals: MySignals
  ) { }
  ngOnDestroy(): void {
    this.CloudPhotos = [];
  }

  ngOnInit() {
    this.loadPhotos();
  }

  @Input() set CloudPhotos(photos: Photo[]) {
    this.cloudPhotos = photos;
  }
  @Input() set User(user: User) {
    this.user = user;
  }

  loadPhotos() {
    const filter = {
      offset: this.photoCount,
      limit: this.limit
    };
    this.mediaService.getUserPhotos(this.user?.id, filter).subscribe(photos => {
      this.cloudPhotos = [...this.cloudPhotos, ...photos];
      this.photoCount += photos.length;
    }, error => {
      console.log(error);
    });
  }

  loadMore(event) {
    this.infiniteScrollTarget = event.target;
    this.loadPhotos();
  }

  deleteFromCloudPhotos(ph: Photo) {
    this.alertController.create({
      cssClass: '',
      header: 'Confirm!',
      message: 'Permanently delete photo?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // this.cloudPhotos = this.cloudPhotos.filter(photo => {
            //   return ph.id !== photo.id;
            // });
            // this.toaster.toast('Photo has been removed from device temporarily!');
          }
        }, {
          text: 'Yes',
          cssClass: 'primary',
          handler: () => {
            // delete from server then remove from local
            this.mediaService.deletePhoto(ph?.id).subscribe(_ => {
              this.cloudPhotos = this.cloudPhotos.filter(photo => {
                return ph.id !== photo.id;
              });
              this.toaster.toast('Photo deleted permanently!');
            });
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }

  selectFromCloudPhotos(ph$: Photo) {
    if (this.selectedCloudPhotos.includes(ph$)) {
      // remove
      this.selectedCloudPhotos = this.selectedCloudPhotos.filter(ph => {
        return ph.id !== ph$?.id;
      });
    } else {

      if (this.returnPhotosCount === this.selectedCloudPhotos.length) {
        // this.toaster.toast('First (' + this.returnPhotosCount + ') selected photo(s) will be used');
        return;
      }
      this.selectedCloudPhotos.push(ph$);
      this.isSelected.emit(this.selectedCloudPhotos);
      this.signals.announceSelectedPhotosChanged(this.selectedCloudPhotos);
    }
  }


  closeModal() {
    this.signals.announceCloseModal('user-cloud-photos');
  }

}
