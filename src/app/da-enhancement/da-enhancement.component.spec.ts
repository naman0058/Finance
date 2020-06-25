import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaEnhancementComponent } from './da-enhancement.component';

describe('DaEnhancementComponent', () => {
  let component: DaEnhancementComponent;
  let fixture: ComponentFixture<DaEnhancementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaEnhancementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaEnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
