import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESERVARComponent } from './reservar.component';

describe('RESERVARComponent', () => {
  let component: RESERVARComponent;
  let fixture: ComponentFixture<RESERVARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RESERVARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RESERVARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
