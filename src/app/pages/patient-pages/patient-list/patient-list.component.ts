import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PatientService} from "../../../core/services/patient.service";
import {Patient} from "../../../core/models/patient.model";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  dataSource: MatTableDataSource<Patient>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayColumns: string[] = [
    'patientId',
    'lastName',
    'firstName',
    'secondName',
    'sex',
    'birthday',
    'policy',
    'serialPassport',
    'numberPassport'
  ];

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(values => {
      this.dataSource = new MatTableDataSource<Patient>(values);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
