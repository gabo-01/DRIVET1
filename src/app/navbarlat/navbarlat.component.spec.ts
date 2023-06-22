import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlatComponent } from './navbarlat.component';

describe('NavbarlatComponent', () => {
  let component: NavbarlatComponent;
  let fixture: ComponentFixture<NavbarlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
