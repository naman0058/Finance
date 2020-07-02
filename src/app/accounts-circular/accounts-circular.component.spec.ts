import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsCircularComponent } from './accounts-circular.component';

describe('AccountsCircularComponent', () => {
  let component: AccountsCircularComponent;
  let fixture: ComponentFixture<AccountsCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
