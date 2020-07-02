import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrbmSmrComponent } from './frbm-smr.component';

describe('FrbmSmrComponent', () => {
  let component: FrbmSmrComponent;
  let fixture: ComponentFixture<FrbmSmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrbmSmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrbmSmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
