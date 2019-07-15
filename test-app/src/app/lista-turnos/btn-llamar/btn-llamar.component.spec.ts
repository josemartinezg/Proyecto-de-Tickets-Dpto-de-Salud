import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLlamarComponent } from './btn-llamar.component';

describe('BtnLlamarComponent', () => {
  let component: BtnLlamarComponent;
  let fixture: ComponentFixture<BtnLlamarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLlamarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLlamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
