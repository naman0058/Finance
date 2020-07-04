import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcoDashboardUpdatePasswordComponent } from './rco-dashboard-update-password.component';

describe('RcoDashboardUpdatePasswordComponent', () => {
  let component: RcoDashboardUpdatePasswordComponent;
  let fixture: ComponentFixture<RcoDashboardUpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcoDashboardUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcoDashboardUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
