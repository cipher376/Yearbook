import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPreviewAuthPage } from './login-preview-auth.page';

describe('LoginPreviewAuthPage', () => {
  let component: LoginPreviewAuthPage;
  let fixture: ComponentFixture<LoginPreviewAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPreviewAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPreviewAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
