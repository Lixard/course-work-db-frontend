import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Drug} from "../../../core/models/drug.model";
import {DrugService} from "../../../core/services/drug.service";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-drug-table-for-appointment',
  templateUrl: './drug-table-for-appointment.component.html',
  styleUrls: ['./drug-table-for-appointment.component.css']
})
export class DrugTableForAppointmentComponent implements OnInit {

  dataSource: MatTableDataSource<Drug>;

  displayColumns: string[] = [
    'select',
    'drugId',
    'name',
    'methodOfTaking',
    'dosage',
    'descriptionOfAction',
    'sideEffects'
  ];

  selection = new SelectionModel<Drug>(true, []);

  @Output('selectedDrugs')
  selected = new EventEmitter<Drug[]>();

  constructor(private drugService: DrugService) {
  }

  ngOnInit(): void {
    this.drugService.getDrugs().subscribe(values => {
      this.dataSource = new MatTableDataSource<Drug>(values);
    });
    this.selection.changed.asObservable().subscribe(values => {
      this.selected.emit(values.source.selected);
    });
  }

}
