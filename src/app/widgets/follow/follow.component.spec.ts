import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowComponent } from './follow.component';

describe('FollowComponent', () => {
  let component: FollowComponent;
  let fixture: ComponentFixture<FollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
