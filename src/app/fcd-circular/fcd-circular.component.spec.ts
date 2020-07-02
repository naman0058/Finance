import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcdCircularComponent } from './fcd-circular.component';

describe('FcdCircularComponent', () => {
  let component: FcdCircularComponent;
  let fixture: ComponentFixture<FcdCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcdCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcdCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
