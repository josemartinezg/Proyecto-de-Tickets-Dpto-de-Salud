import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgSelectUserComponent } from './dlg-select-user.component';

describe('DlgSelectUserComponent', () => {
  let component: DlgSelectUserComponent;
  let fixture: ComponentFixture<DlgSelectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgSelectUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgSelectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
