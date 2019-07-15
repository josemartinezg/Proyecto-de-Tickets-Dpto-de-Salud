import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgTurnoLlamadoComponent } from './dlg-turno-llamado.component';

describe('DlgTurnoLlamadoComponent', () => {
  let component: DlgTurnoLlamadoComponent;
  let fixture: ComponentFixture<DlgTurnoLlamadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgTurnoLlamadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgTurnoLlamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
