import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolsLocationPage } from './schools-location.page';

describe('SchoolsSearchPage', () => {
  let component: SchoolsLocationPage;
  let fixture: ComponentFixture<SchoolsLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolsLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
