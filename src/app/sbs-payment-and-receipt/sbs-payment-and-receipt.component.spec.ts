import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsPaymentAndReceiptComponent } from './sbs-payment-and-receipt.component';

describe('SbsPaymentAndReceiptComponent', () => {
  let component: SbsPaymentAndReceiptComponent;
  let fixture: ComponentFixture<SbsPaymentAndReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsPaymentAndReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsPaymentAndReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
