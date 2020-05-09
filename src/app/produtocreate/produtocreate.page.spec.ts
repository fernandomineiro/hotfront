import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutocreatePage } from './produtocreate.page';

describe('ProdutocreatePage', () => {
  let component: ProdutocreatePage;
  let fixture: ComponentFixture<ProdutocreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutocreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutocreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
