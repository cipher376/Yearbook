import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPreviewUnAuthPage } from './login-preview-un-auth.page';

describe('LoginPreviewUnAuthPage', () => {
  let component: LoginPreviewUnAuthPage;
  let fixture: ComponentFixture<LoginPreviewUnAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPreviewUnAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPreviewUnAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
