import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAutosComponent } from './busqueda-autos.component';

describe('BusquedaAutosComponent', () => {
  let component: BusquedaAutosComponent;
  let fixture: ComponentFixture<BusquedaAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaAutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
