import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Diagnosis} from "../../../core/models/diagnosis.model";
import {DiagnosisService} from "../../../core/services/diagnosis.service";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.css']
})
export class DiagnosisListComponent implements OnInit {

  dataSource: MatTableDataSource<Diagnosis>;
  displayColumns: string[] = [
    'diagnosisId',
    'diagnosisName',
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private diagnosisService: DiagnosisService) {
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
}
