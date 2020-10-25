import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePostPage1 } from './create-post1.page';

describe('CreatePostPage1', () => {
  let component: CreatePostPage1;
  let fixture: ComponentFixture<CreatePostPage1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePostPage1 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePostPage1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
