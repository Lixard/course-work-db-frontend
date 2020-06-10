import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PatientService} from "../../../core/services/patient.service";
import {Patient} from "../../../core/models/patient.model";
import {MatSort} from "@angular/material/sort";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {AddPatientDialogComponent} from "../add-patient-dialog/add-patient-dialog.component";
import {ChangePatientDialogComponent} from "../change-patient-dialog/change-patient-dialog.component";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
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
  expandedElement: Patient | null;

  constructor(private patientService: PatientService,
              private dialog: MatDialog) {
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

  refresh() {
    this.patientService.getPatients().subscribe(data => this.dataSource.data = data);
  }

  delete(element: Patient) {
    this.patientService.delete(element.patientId).subscribe(() => this.refresh());
  }

  registerPatient() {
    const matDialogRef = this.dialog.open(AddPatientDialogComponent);
    matDialogRef.afterClosed().subscribe(() => this.refresh());
  }

  changeDialog(element: Patient) {
    const matDialogRef = this.dialog.open(ChangePatientDialogComponent, {
      data: element
    });
    matDialogRef.afterClosed().subscribe(() => this.refresh());
  }
}
