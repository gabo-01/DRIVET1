import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MreservasComponent } from './mreservas.component';

describe('MreservasComponent', () => {
  let component: MreservasComponent;
  let fixture: ComponentFixture<MreservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MreservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MreservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
