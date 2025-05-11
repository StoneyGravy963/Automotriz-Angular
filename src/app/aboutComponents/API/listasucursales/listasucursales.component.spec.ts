import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasucursalesComponent } from './listasucursales.component';

describe('ListasucursalesComponent', () => {
  let component: ListasucursalesComponent;
  let fixture: ComponentFixture<ListasucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasucursalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
