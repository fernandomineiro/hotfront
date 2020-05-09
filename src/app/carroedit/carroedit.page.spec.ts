import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarroeditPage } from './carroedit.page';

describe('CarroeditPage', () => {
  let component: CarroeditPage;
  let fixture: ComponentFixture<CarroeditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroeditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarroeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
