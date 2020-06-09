import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientAppointmentsListComponent} from './patient-appointments-list.component';

describe('PatientAppointmentsListComponent', () => {
  let component: PatientAppointmentsListComponent;
  let fixture: ComponentFixture<PatientAppointmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientAppointmentsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppointmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
