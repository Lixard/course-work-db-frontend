import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiagnosisTableForAppointmentComponent} from './diagnosis-table-for-appointment.component';

describe('DiagnosisTableForAppointmentComponent', () => {
  let component: DiagnosisTableForAppointmentComponent;
  let fixture: ComponentFixture<DiagnosisTableForAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisTableForAppointmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisTableForAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
