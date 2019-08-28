import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoturnoAdminComponent } from './tipoturno-admin.component';

describe('TipoturnoAdminComponent', () => {
  let component: TipoturnoAdminComponent;
  let fixture: ComponentFixture<TipoturnoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoturnoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoturnoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
