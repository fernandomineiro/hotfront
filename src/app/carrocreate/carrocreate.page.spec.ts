import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrocreatePage } from './carrocreate.page';

describe('CarrocreatePage', () => {
  let component: CarrocreatePage;
  let fixture: ComponentFixture<CarrocreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrocreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrocreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
