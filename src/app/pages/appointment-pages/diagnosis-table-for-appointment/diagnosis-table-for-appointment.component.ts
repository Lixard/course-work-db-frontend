import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Diagnosis} from "../../../core/models/diagnosis.model";
import {DiagnosisService} from "../../../core/services/diagnosis.service";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-diagnosis-table-for-appointment',
  templateUrl: './diagnosis-table-for-appointment.component.html',
  styleUrls: ['./diagnosis-table-for-appointment.component.css']
})
export class DiagnosisTableForAppointmentComponent implements OnInit {

  dataSource: MatTableDataSource<Diagnosis>;
  displayColumns: string[] = [
    'select',
    'diagnosisId',
    'diagnosisName',
  ];
  selection = new SelectionModel<Diagnosis>(true, []);

  @Output('selectedDiagnoses')
  selected = new EventEmitter<Diagnosis[]>();

  constructor(private diagnosisService: DiagnosisService) {
  }

  ngOnInit(): void {
    this.diagnosisService.getDiagnoses().subscribe(values => {
      this.dataSource = new MatTableDataSource<Diagnosis>(values);
    });
    this.selection.changed.asObservable().subscribe(values => {
      this.selected.emit(values.source.selected);
    });
  }
}
