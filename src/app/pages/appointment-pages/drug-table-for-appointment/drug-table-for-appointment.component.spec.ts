import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrugTableForAppointmentComponent} from './drug-table-for-appointment.component';

describe('DrugTableForAppointmentComponent', () => {
  let component: DrugTableForAppointmentComponent;
  let fixture: ComponentFixture<DrugTableForAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrugTableForAppointmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugTableForAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
