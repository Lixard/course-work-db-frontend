import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../core/services/appointment.service";
import {MatTableDataSource} from "@angular/material/table";
import {ComplicatedAppointment} from "../../../core/models/appointment.model";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  dataSource: MatTableDataSource<ComplicatedAppointment>;
  displayColumns: string[] = ['appointmentId', 'patient', 'doctor', 'place', 'appointmentDate', 'symptoms'];

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.appointmentService.getComplicatedAppointments().subscribe(
      values => (this.dataSource = new MatTableDataSource<ComplicatedAppointment>(values))
    );
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
