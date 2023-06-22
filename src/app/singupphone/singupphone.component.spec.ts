import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupphoneComponent } from './singupphone.component';

describe('SingupphoneComponent', () => {
  let component: SingupphoneComponent;
  let fixture: ComponentFixture<SingupphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
