import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Drug} from "../../../core/models/drug.model";
import {DrugService} from "../../../core/services/drug.service";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
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


  constructor(private drugService: DrugService) {
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
}
