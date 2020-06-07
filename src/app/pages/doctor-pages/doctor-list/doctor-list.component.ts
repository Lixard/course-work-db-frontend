import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {DoctorService} from "../../../core/services/doctor.service";
import {Doctor} from "../../../core/models/doctor.model";

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  dataSource: MatTableDataSource<Doctor>;
  displayColumns: string[] = [
    'doctorId',
    'lastName',
    'firstName',
    'secondName',
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(values => {
      this.dataSource = new MatTableDataSource<Doctor>(values);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
