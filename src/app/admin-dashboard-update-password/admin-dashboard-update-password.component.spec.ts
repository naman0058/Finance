import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardUpdatePasswordComponent } from './admin-dashboard-update-password.component';

describe('AdminDashboardUpdatePasswordComponent', () => {
  let component: AdminDashboardUpdatePasswordComponent;
  let fixture: ComponentFixture<AdminDashboardUpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
