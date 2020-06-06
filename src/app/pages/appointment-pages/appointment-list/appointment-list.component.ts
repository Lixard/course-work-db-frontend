import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../core/services/appointment.service";
import {Appointment} from "../../../core/models/appointment.model";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  dataSource: MatTableDataSource<Appointment>;
  displayColumns: string[] = ['appointmentId', 'patientId', 'doctorId', 'place', 'appointmentDate', 'symptoms'];

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(
      values => this.dataSource = new MatTableDataSource<Appointment>(values)
    );
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
