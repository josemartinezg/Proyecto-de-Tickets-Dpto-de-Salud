import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTicketsComponent } from './seleccion-tickets.component';

describe('SeleccionTicketsComponent', () => {
  let component: SeleccionTicketsComponent;
  let fixture: ComponentFixture<SeleccionTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
