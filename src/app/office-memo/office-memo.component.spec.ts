import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeMemoComponent } from './office-memo.component';

describe('OfficeMemoComponent', () => {
  let component: OfficeMemoComponent;
  let fixture: ComponentFixture<OfficeMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
