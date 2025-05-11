import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionSComponent } from './informacion-s.component';

describe('InformacionSComponent', () => {
  let component: InformacionSComponent;
  let fixture: ComponentFixture<InformacionSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
