import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosUsuarioAtencionComponent } from './turnos-usuario-atencion.component';

describe('TurnosUsuarioAtencionComponent', () => {
  let component: TurnosUsuarioAtencionComponent;
  let fixture: ComponentFixture<TurnosUsuarioAtencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosUsuarioAtencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosUsuarioAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
