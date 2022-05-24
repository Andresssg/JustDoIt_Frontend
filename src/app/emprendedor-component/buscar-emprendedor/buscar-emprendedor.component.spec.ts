import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEmprendedorComponent } from './buscar-emprendedor.component';

describe('BuscarEmprendedorComponent', () => {
  let component: BuscarEmprendedorComponent;
  let fixture: ComponentFixture<BuscarEmprendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEmprendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEmprendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
