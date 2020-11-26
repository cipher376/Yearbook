import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyShareComponent } from './my-share.component';

describe('MyShareComponent', () => {
  let component: MyShareComponent;
  let fixture: ComponentFixture<MyShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShareComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
