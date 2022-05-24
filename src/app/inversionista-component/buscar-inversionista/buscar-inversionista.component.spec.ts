import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarInversionistaComponent } from './buscar-inversionista.component';

describe('BuscarInversionistaComponent', () => {
  let component: BuscarInversionistaComponent;
  let fixture: ComponentFixture<BuscarInversionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarInversionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarInversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
