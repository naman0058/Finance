import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpfComponent } from './gpf.component';

describe('GpfComponent', () => {
  let component: GpfComponent;
  let fixture: ComponentFixture<GpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
