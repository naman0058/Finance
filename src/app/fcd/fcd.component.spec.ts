import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcdComponent } from './fcd.component';

describe('FcdComponent', () => {
  let component: FcdComponent;
  let fixture: ComponentFixture<FcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
