import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoBienvenidaComponent } from './texto-bienvenida.component';

describe('TextoBienvenidaComponent', () => {
  let component: TextoBienvenidaComponent;
  let fixture: ComponentFixture<TextoBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoBienvenidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
