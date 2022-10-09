import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWDropdownComponent } from './navbar-w-dropdown.component';

describe('NavbarWDropdownComponent', () => {
  let component: NavbarWDropdownComponent;
  let fixture: ComponentFixture<NavbarWDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarWDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarWDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
