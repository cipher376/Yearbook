import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostWidget1Component } from './post-widget1.component';

describe('PostWidget1Component', () => {
  let component: PostWidget1Component;
  let fixture: ComponentFixture<PostWidget1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWidget1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostWidget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
