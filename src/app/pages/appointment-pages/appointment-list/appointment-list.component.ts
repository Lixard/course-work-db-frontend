import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../core/services/appointment.service";
import {Appointment} from "../../../core/models/appointment.model";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  dataSource: Appointment[];
  displayColumns: string[] = ['appointmentId', 'patientId', 'doctorId', 'place', 'appointmentDate', 'symptoms'];

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(value => this.dataSource = value);
  }

}
