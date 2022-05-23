import { TestBed } from '@angular/core/testing';

import { InversionistaServicioService } from './inversionista-servicio.service';

describe('InversionistaServicioService', () => {
  let service: InversionistaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InversionistaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
