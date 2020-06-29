import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsUploadComponent } from './sbs-upload.component';

describe('SbsUploadComponent', () => {
  let component: SbsUploadComponent;
  let fixture: ComponentFixture<SbsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
