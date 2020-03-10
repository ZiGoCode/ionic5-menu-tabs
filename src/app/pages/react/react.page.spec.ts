import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReactPage } from './react.page';

describe('ReactPage', () => {
  let component: ReactPage;
  let fixture: ComponentFixture<ReactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
