import { TestBed } from '@angular/core/testing';

import { TipoturnoService } from './tipoturno.service';

describe('TipoturnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoturnoService = TestBed.get(TipoturnoService);
    expect(service).toBeTruthy();
  });
});
