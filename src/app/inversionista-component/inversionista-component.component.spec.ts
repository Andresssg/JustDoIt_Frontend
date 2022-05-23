import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionistaComponentComponent } from './inversionista-component.component';

describe('InversionistaComponentComponent', () => {
  let component: InversionistaComponentComponent;
  let fixture: ComponentFixture<InversionistaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InversionistaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InversionistaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
