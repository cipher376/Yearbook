import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivitySettingsPage } from './activity-settings.page';

describe('ActivitySettingsPage', () => {
  let component: ActivitySettingsPage;
  let fixture: ComponentFixture<ActivitySettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitySettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
