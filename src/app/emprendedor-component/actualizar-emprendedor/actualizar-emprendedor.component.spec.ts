import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmprendedorComponent } from './actualizar-emprendedor.component';

describe('ActualizarEmprendedorComponent', () => {
  let component: ActualizarEmprendedorComponent;
  let fixture: ComponentFixture<ActualizarEmprendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEmprendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEmprendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
