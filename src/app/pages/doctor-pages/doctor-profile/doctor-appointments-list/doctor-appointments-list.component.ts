import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ComplicatedAppointment} from "../../../../core/models/appointment.model";
import {MatSort} from "@angular/material/sort";
import {AppointmentService} from "../../../../core/services/appointment.service";
import {Doctor} from "../../../../core/models/doctor.model";

@Component({
  selector: 'app-doctor-appointments-list',
  templateUrl: './doctor-appointments-list.component.html',
  styleUrls: ['./doctor-appointments-list.component.css']
})
export class DoctorAppointmentsListComponent implements OnInit {

  @Input('doctor')
  doctor: Doctor;
  dataSource: MatTableDataSource<ComplicatedAppointment>;
  displayColumns: string[] = [
    'appointmentId',
    'patient',
    'place',
    'appointmentDate',
    'symptoms'
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.appointmentService.getDoctorComplicatedAppointments(this.doctor.doctorId).subscribe(value => {
      this.dataSource = new MatTableDataSource<ComplicatedAppointment>(value);
      this.dataSource.sort = this.sort;
    });
  }
}
