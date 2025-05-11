import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraSComponent } from './cabecera-s.component';

describe('CabeceraSComponent', () => {
  let component: CabeceraSComponent;
  let fixture: ComponentFixture<CabeceraSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
