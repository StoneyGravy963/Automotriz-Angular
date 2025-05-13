import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOpinionesComponent } from './tabla-opiniones.component';

describe('TablaOpinionesComponent', () => {
  let component: TablaOpinionesComponent;
  let fixture: ComponentFixture<TablaOpinionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaOpinionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
