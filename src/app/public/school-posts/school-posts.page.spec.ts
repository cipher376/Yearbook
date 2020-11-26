import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolPostsPage } from './school-posts.page';

describe('SchoolPostsPage', () => {
  let component: SchoolPostsPage;
  let fixture: ComponentFixture<SchoolPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolPostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
