import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcoDashboardReportComponent } from './rco-dashboard-report.component';

describe('RcoDashboardReportComponent', () => {
  let component: RcoDashboardReportComponent;
  let fixture: ComponentFixture<RcoDashboardReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcoDashboardReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcoDashboardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
