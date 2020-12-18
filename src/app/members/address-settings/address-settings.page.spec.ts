import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressSettingsPage } from './address-settings.page';

describe('AddressSettingsPage', () => {
  let component: AddressSettingsPage;
  let fixture: ComponentFixture<AddressSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
