import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersSearchPage } from './users-search.page';

describe('UsersSearchPage', () => {
  let component: UsersSearchPage;
  let fixture: ComponentFixture<UsersSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
