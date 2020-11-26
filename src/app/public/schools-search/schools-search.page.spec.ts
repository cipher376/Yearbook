import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolsSearchPage } from './schools-search.page';

describe('SchoolsSearchPage', () => {
  let component: SchoolsSearchPage;
  let fixture: ComponentFixture<SchoolsSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolsSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
