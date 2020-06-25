import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeVacanciesComponent } from './empolyee-vacancies.component';

describe('EmpolyeeVacanciesComponent', () => {
  let component: EmpolyeeVacanciesComponent;
  let fixture: ComponentFixture<EmpolyeeVacanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpolyeeVacanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpolyeeVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
