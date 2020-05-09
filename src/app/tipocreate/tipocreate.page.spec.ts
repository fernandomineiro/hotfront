import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipocreatePage } from './tipocreate.page';

describe('TipocreatePage', () => {
  let component: TipocreatePage;
  let fixture: ComponentFixture<TipocreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipocreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipocreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
