import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Diagnosis} from "../../../core/models/diagnosis.model";
import {DiagnosisService} from "../../../core/services/diagnosis.service";
import {MatSort} from "@angular/material/sort";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {AddDiagnosisDialogComponent} from "../add-diagnosis-dialog/add-diagnosis-dialog.component";
import {ChangeDiagnosisDialogComponent} from "../change-diagnosis-dialog/change-diagnosis-dialog.component";

@Component({
  selector: 'app-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DiagnosisListComponent implements OnInit {

  dataSource: MatTableDataSource<Diagnosis>;
  displayColumns: string[] = [
    'diagnosisId',
    'diagnosisName',
  ];
  expandedElement: Diagnosis | null;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private diagnosisService: DiagnosisService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.diagnosisService.getDiagnoses().subscribe(values => {
      this.dataSource = new MatTableDataSource<Diagnosis>(values);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refresh() {
    this.diagnosisService.getDiagnoses().subscribe(data => this.dataSource.data = data);
  }

  delete(element: Diagnosis) {
    this.diagnosisService.delete(element.diagnosisId).subscribe(() => this.refresh());
  }

  createDialog() {
    const dialogRef = this.dialog.open(AddDiagnosisDialogComponent);
    dialogRef.afterClosed().subscribe(() => this.refresh());
  }

  updateDialog(element: Diagnosis) {
    const dialogRef = this.dialog.open(ChangeDiagnosisDialogComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(() => this.refresh());
  }
}
