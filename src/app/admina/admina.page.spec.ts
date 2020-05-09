import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminaPage } from './admina.page';

describe('AdminaPage', () => {
  let component: AdminaPage;
  let fixture: ComponentFixture<AdminaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
