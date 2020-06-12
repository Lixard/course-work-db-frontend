import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Drug} from "../../../core/models/drug.model";
import {DrugService} from "../../../core/services/drug.service";
import {MatSort} from "@angular/material/sort";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {AddDrugDialogComponent} from "../add-drug-dialog/add-drug-dialog.component";
import {ChangeDrugDialogComponent} from "../change-drug-dialog/change-drug-dialog.component";
import {DownloadFileService} from "../../../core/services/download-file.service";

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DrugListComponent implements OnInit {

  dataSource: MatTableDataSource<Drug>;

  displayColumns: string[] = [
    'drugId',
    'name',
    'methodOfTaking',
    'dosage',
    'descriptionOfAction',
    'sideEffects'
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  expandedElement: Drug | null;


  constructor(private drugService: DrugService,
              private dialog: MatDialog,
              private downloadFileService: DownloadFileService) {
  }

  ngOnInit(): void {
    this.drugService.getDrugs().subscribe(values => {
      this.dataSource = new MatTableDataSource<Drug>(values);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(element: Drug) {
    this.drugService.delete(element.drugId).subscribe(() => this.refresh());
  }

  refresh() {
    this.drugService.getDrugs().subscribe(data => this.dataSource.data = data);
  }

  createDialog() {
    const dialogRef = this.dialog.open(AddDrugDialogComponent);
    dialogRef.afterClosed().subscribe(() => this.refresh());
  }

  updateDialog(element: Drug) {
    const dialogRef = this.dialog.open(ChangeDrugDialogComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(() => this.refresh());
  }

  exportToExcel() {
    this.drugService.getExportFile().subscribe(value =>
      this.downloadFileService.downLoadFile(value, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'));
  }
}
