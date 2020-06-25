import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAndPromotionComponent } from './transfer-and-promotion.component';

describe('TransferAndPromotionComponent', () => {
  let component: TransferAndPromotionComponent;
  let fixture: ComponentFixture<TransferAndPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferAndPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferAndPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
