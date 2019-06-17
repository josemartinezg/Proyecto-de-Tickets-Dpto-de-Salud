import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTurnoBtnComponent } from './tipo-turno-btn.component';

describe('TipoTurnoBtnComponent', () => {
  let component: TipoTurnoBtnComponent;
  let fixture: ComponentFixture<TipoTurnoBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTurnoBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTurnoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
