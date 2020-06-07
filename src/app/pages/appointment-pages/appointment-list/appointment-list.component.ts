import {Component, OnInit, ViewChild} from '@angular/core';
import {AppointmentService} from "../../../core/services/appointment.service";
import {MatTableDataSource} from "@angular/material/table";
import {ComplicatedAppointment} from "../../../core/models/appointment.model";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  dataSource: MatTableDataSource<ComplicatedAppointment>;
  displayColumns: string[] = ['appointmentId', 'patient', 'doctor', 'place', 'appointmentDate', 'symptoms'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.appointmentService.getComplicatedAppointments().subscribe(
      values => {
        this.dataSource = new MatTableDataSource<ComplicatedAppointment>(values);
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'patient':
              return item.patient.lastName;
            case 'doctor':
              return item.doctor.lastName;
            default:
              return item[property];
          }
        };
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data: any, filter) => {
          const dataStr = JSON.stringify(data).toLowerCase();
          return dataStr.indexOf(filter) != -1;
        };
      });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
