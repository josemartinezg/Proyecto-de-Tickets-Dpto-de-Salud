import { TestBed } from '@angular/core/testing';

import { TipoTurnoBtnService } from './tipo-turno-btn.service';

describe('TipoTurnoBtnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoTurnoBtnService = TestBed.get(TipoTurnoBtnService);
    expect(service).toBeTruthy();
  });
});
