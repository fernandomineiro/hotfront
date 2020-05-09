import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompraaPage } from './compraa.page';

describe('CompraaPage', () => {
  let component: CompraaPage;
  let fixture: ComponentFixture<CompraaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompraaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
