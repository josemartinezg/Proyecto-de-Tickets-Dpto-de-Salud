import { TestBed } from '@angular/core/testing';

import { QzTrayService } from './qz-tray.service';

describe('QzTrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QzTrayService = TestBed.get(QzTrayService);
    expect(service).toBeTruthy();
  });
});
