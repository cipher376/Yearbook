import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MySchoolsPage } from './my-schools.page';

describe('MySchoolsPage', () => {
  let component: MySchoolsPage;
  let fixture: ComponentFixture<MySchoolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySchoolsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MySchoolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
