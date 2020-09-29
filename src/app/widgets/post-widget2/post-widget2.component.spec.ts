import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostWidget2Component } from './post-widget2.component';

describe('PostWidget2Component', () => {
  let component: PostWidget2Component;
  let fixture: ComponentFixture<PostWidget2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWidget2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostWidget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
