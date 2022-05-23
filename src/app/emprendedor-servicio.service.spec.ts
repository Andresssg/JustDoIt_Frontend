import { TestBed } from '@angular/core/testing';

import { EmprendedorServicioService } from './emprendedor-servicio.service';

describe('EmprendedorServicioService', () => {
  let service: EmprendedorServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprendedorServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
