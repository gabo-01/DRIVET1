import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgadminComponent } from './lgadmin.component';

describe('LgadminComponent', () => {
  let component: LgadminComponent;
  let fixture: ComponentFixture<LgadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
