import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplanmentAccountsComponent } from './emplanment-accounts.component';

describe('EmplanmentAccountsComponent', () => {
  let component: EmplanmentAccountsComponent;
  let fixture: ComponentFixture<EmplanmentAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplanmentAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplanmentAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
