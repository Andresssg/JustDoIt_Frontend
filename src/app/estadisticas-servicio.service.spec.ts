import { TestBed } from '@angular/core/testing';

import { EstadisticasServicioService } from './estadisticas-servicio.service';

describe('EstadisticasServicioService', () => {
  let service: EstadisticasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadisticasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
