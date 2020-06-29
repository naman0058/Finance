import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavbarEndComponent } from './admin-navbar-end.component';

describe('AdminNavbarEndComponent', () => {
  let component: AdminNavbarEndComponent;
  let fixture: ComponentFixture<AdminNavbarEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavbarEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavbarEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
