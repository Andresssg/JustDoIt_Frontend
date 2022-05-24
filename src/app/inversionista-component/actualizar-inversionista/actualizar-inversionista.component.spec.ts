import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInversionistaComponent } from './actualizar-inversionista.component';

describe('ActualizarInversionistaComponent', () => {
  let component: ActualizarInversionistaComponent;
  let fixture: ComponentFixture<ActualizarInversionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarInversionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarInversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
