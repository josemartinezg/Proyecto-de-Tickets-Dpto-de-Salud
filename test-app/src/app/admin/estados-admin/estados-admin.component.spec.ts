import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosAdminComponent } from './estados-admin.component';

describe('EstadosAdminComponent', () => {
  let component: EstadosAdminComponent;
  let fixture: ComponentFixture<EstadosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
