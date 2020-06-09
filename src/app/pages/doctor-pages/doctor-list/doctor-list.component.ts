import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {DoctorService} from "../../../core/services/doctor.service";
import {Doctor} from "../../../core/models/doctor.model";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {AddDoctorDialogComponent} from "../add-doctor-dialog/add-doctor-dialog.component";

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
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
  expandedElement: Doctor | null;


  constructor(private doctorService: DoctorService,
              private dialog: MatDialog) {
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

  refresh() {
    this.doctorService.getDoctors().subscribe((values: Doctor[]) => {
      this.dataSource.data = values;
    });
  }

  delete(element: Doctor) {
    this.doctorService.delete(element.doctorId).subscribe(() => this.refresh());
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(AddDoctorDialogComponent);
    dialogRef.afterClosed().subscribe(() => this.refresh());
  }
}
