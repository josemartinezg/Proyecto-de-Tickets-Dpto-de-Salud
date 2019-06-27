import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoTxtComponent } from './turno-txt.component';

describe('TurnoTxtComponent', () => {
  let component: TurnoTxtComponent;
  let fixture: ComponentFixture<TurnoTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
