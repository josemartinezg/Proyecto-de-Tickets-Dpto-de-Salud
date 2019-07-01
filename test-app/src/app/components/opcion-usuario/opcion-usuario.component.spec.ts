import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionUsuarioComponent } from './opcion-usuario.component';

describe('OpcionUsuarioComponent', () => {
  let component: OpcionUsuarioComponent;
  let fixture: ComponentFixture<OpcionUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
