import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSbsAdminComponent } from './create-sbs-admin.component';

describe('CreateSbsAdminComponent', () => {
  let component: CreateSbsAdminComponent;
  let fixture: ComponentFixture<CreateSbsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSbsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSbsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
