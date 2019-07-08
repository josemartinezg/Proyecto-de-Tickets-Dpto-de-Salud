import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAceptarComponent } from './btn-aceptar.component';

describe('BtnAceptarComponent', () => {
  let component: BtnAceptarComponent;
  let fixture: ComponentFixture<BtnAceptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnAceptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
