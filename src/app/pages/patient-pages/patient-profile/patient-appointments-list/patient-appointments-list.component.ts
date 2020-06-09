import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AppointmentService} from "../../../../core/services/appointment.service";
import {Patient} from "../../../../core/models/patient.model";
import {MatTableDataSource} from "@angular/material/table";
import {ComplicatedAppointment} from "../../../../core/models/appointment.model";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-patient-appointments-list',
  templateUrl: './patient-appointments-list.component.html',
  styleUrls: ['./patient-appointments-list.component.css']
})
export class PatientAppointmentsListComponent implements OnInit {

  @Input('patient')
  patient: Patient;
  dataSource: MatTableDataSource<ComplicatedAppointment>;
  displayColumns: string[] = [
    'appointmentId',
    'doctor',
    'place',
    'appointmentDate',
    'symptoms'
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.appointmentService.getPatientComplicatedAppointments(this.patient.patientId).subscribe(value => {
      this.dataSource = new MatTableDataSource<ComplicatedAppointment>(value);
      this.dataSource.sort = this.sort;
    });
  }

}
