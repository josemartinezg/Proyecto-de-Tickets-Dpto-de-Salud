import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeclinarComponent } from './btn-declinar.component';

describe('BtnDeclinarComponent', () => {
  let component: BtnDeclinarComponent;
  let fixture: ComponentFixture<BtnDeclinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDeclinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDeclinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
