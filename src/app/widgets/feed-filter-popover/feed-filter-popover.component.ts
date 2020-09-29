import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { SchoolService } from './../../shared/services/model-service/school.service';
import { School } from './../../models/school';
import { Component, OnInit } from '@angular/core';
import { Alumni } from 'src/app/models/alumni';

@Component({
  selector: 'app-feed-filter-popover',
  templateUrl: './feed-filter-popover.component.html',
  styleUrls: ['./feed-filter-popover.component.scss'],
})
export class FeedFilterPopoverComponent implements OnInit {
  schools: School[];

  constructor(
    // private schoolService: SchoolService,
    private store: MyStorage) {
   }

  ngOnInit() {
    this.store.getObject<Alumni[]>('user-alumni').then(alumni => {
      alumni.forEach(alu => {
        this.schools.push(alu.school);
      });
    });
  }

}
