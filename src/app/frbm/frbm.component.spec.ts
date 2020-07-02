import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrbmComponent } from './frbm.component';

describe('FrbmComponent', () => {
  let component: FrbmComponent;
  let fixture: ComponentFixture<FrbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
