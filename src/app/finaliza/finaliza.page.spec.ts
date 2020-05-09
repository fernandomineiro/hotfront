import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalizaPage } from './finaliza.page';

describe('FinalizaPage', () => {
  let component: FinalizaPage;
  let fixture: ComponentFixture<FinalizaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalizaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
