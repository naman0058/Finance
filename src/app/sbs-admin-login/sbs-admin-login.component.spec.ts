import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsAdminLoginComponent } from './sbs-admin-login.component';

describe('SbsAdminLoginComponent', () => {
  let component: SbsAdminLoginComponent;
  let fixture: ComponentFixture<SbsAdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsAdminLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
