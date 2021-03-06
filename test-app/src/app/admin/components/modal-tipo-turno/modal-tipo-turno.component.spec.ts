import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTipoTurnoComponent } from './modal-tipo-turno.component';

describe('ModalTipoTurnoComponent', () => {
  let component: ModalTipoTurnoComponent;
  let fixture: ComponentFixture<ModalTipoTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTipoTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTipoTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
