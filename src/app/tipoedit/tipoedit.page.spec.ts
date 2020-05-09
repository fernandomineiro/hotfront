import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipoeditPage } from './tipoedit.page';

describe('TipoeditPage', () => {
  let component: TipoeditPage;
  let fixture: ComponentFixture<TipoeditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoeditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipoeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
