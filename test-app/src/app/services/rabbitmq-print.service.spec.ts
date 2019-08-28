import { TestBed } from '@angular/core/testing';

import { RabbitmqPrintService } from './rabbitmq-print.service';

describe('RabbitmqPrintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RabbitmqPrintService = TestBed.get(RabbitmqPrintService);
    expect(service).toBeTruthy();
  });
});
