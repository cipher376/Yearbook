import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostWidget3Component } from './post-widget3.component';

describe('PostWidget3Component', () => {
  let component: PostWidget3Component;
  let fixture: ComponentFixture<PostWidget3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWidget3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostWidget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
