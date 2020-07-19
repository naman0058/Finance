import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardSbsUploadComponent } from './admin-dashboard-sbs-upload.component';

describe('AdminDashboardSbsUploadComponent', () => {
  let component: AdminDashboardSbsUploadComponent;
  let fixture: ComponentFixture<AdminDashboardSbsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardSbsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardSbsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
