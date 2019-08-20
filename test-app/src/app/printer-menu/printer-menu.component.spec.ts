import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterMenuComponent } from './printer-menu.component';

describe('PrinterMenuComponent', () => {
  let component: PrinterMenuComponent;
  let fixture: ComponentFixture<PrinterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
