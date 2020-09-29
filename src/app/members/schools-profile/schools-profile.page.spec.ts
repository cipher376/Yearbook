import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolsProfilePage } from './schools-profile.page';

describe('SchoolsProfilePage', () => {
  let component: SchoolsProfilePage;
  let fixture: ComponentFixture<SchoolsProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolsProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
