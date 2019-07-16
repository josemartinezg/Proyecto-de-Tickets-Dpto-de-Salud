import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoAdminComponent } from './puesto-admin.component';

describe('PuestoAdminComponent', () => {
  let component: PuestoAdminComponent;
  let fixture: ComponentFixture<PuestoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuestoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
