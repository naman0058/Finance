import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderingAccountsComponent } from './tendering-accounts.component';

describe('TenderingAccountsComponent', () => {
  let component: TenderingAccountsComponent;
  let fixture: ComponentFixture<TenderingAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderingAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
