import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendedorComponentComponent } from './emprendedor-component.component';

describe('EmprendedorComponentComponent', () => {
  let component: EmprendedorComponentComponent;
  let fixture: ComponentFixture<EmprendedorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprendedorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprendedorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
