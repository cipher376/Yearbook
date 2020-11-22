import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MySliderComponent } from './my-slider.component';

describe('MySliderComponent', () => {
  let component: MySliderComponent;
  let fixture: ComponentFixture<MySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySliderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
