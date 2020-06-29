import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpfLoginComponent } from './gpf-login.component';

describe('GpfLoginComponent', () => {
  let component: GpfLoginComponent;
  let fixture: ComponentFixture<GpfLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpfLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
