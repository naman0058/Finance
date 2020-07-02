import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCircularComponent } from './budget-circular.component';

describe('BudgetCircularComponent', () => {
  let component: BudgetCircularComponent;
  let fixture: ComponentFixture<BudgetCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
