import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolsJoinPage } from './schools-join.page';

describe('SchoolsJoinPage', () => {
  let component: SchoolsJoinPage;
  let fixture: ComponentFixture<SchoolsJoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsJoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolsJoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
