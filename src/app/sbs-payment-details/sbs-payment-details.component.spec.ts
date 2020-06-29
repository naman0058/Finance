import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsPaymentDetailsComponent } from './sbs-payment-details.component';

describe('SbsPaymentDetailsComponent', () => {
  let component: SbsPaymentDetailsComponent;
  let fixture: ComponentFixture<SbsPaymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsPaymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
