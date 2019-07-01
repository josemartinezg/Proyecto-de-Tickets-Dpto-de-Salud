import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosTxtComponent } from './turnos-txt.component';

describe('TurnosTxtComponent', () => {
  let component: TurnosTxtComponent;
  let fixture: ComponentFixture<TurnosTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
