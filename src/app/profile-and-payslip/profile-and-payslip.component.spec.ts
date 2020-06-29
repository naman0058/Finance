import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAndPayslipComponent } from './profile-and-payslip.component';

describe('ProfileAndPayslipComponent', () => {
  let component: ProfileAndPayslipComponent;
  let fixture: ComponentFixture<ProfileAndPayslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAndPayslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAndPayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
