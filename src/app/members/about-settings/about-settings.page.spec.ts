import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutSettingsPage } from './about-settings.page';

describe('AboutSettingsPage', () => {
  let component: AboutSettingsPage;
  let fixture: ComponentFixture<AboutSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
