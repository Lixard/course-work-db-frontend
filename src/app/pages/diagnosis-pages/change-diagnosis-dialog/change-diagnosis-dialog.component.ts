import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DiagnosisService} from "../../../core/services/diagnosis.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Diagnosis} from "../../../core/models/diagnosis.model";

@Component({
  selector: 'app-change-diagnosis-dialog',
  templateUrl: './change-diagnosis-dialog.component.html',
  styleUrls: ['./change-diagnosis-dialog.component.css']
})
export class ChangeDiagnosisDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private diagnosisService: DiagnosisService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ChangeDiagnosisDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Diagnosis) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: this.fb.control(this.data.diagnosisName, Validators.required),
    });
  }

  register(values) {
    let diagnosis = {
      diagnosisName: values.name,
    } as Diagnosis
    this.diagnosisService.update(this.data.diagnosisId, diagnosis).subscribe(value => {
      console.log(value);
      this.dialogRef.close();
    });
  }

}
