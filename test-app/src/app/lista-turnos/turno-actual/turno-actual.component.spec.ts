import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoActualComponent } from './turno-actual.component';

describe('TurnoActualComponent', () => {
  let component: TurnoActualComponent;
  let fixture: ComponentFixture<TurnoActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
