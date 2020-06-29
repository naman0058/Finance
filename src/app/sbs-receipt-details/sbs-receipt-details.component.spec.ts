import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsReceiptDetailsComponent } from './sbs-receipt-details.component';

describe('SbsReceiptDetailsComponent', () => {
  let component: SbsReceiptDetailsComponent;
  let fixture: ComponentFixture<SbsReceiptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsReceiptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsReceiptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
