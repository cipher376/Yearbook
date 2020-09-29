import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabLinksPage } from './tab-links.page';

describe('TabLinksPage', () => {
  let component: TabLinksPage;
  let fixture: ComponentFixture<TabLinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLinksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabLinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
