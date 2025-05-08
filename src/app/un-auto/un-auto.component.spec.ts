import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAutoComponent } from './un-auto.component';

describe('UnAutoComponent', () => {
  let component: UnAutoComponent;
  let fixture: ComponentFixture<UnAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
