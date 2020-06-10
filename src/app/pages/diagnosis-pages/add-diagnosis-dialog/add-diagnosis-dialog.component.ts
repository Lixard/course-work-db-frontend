import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Diagnosis} from "../../../core/models/diagnosis.model";
import {DiagnosisService} from "../../../core/services/diagnosis.service";

@Component({
  selector: 'app-add-diagnosis-dialog',
  templateUrl: './add-diagnosis-dialog.component.html',
  styleUrls: ['./add-diagnosis-dialog.component.css']
})
export class AddDiagnosisDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private diagnosisService: DiagnosisService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddDiagnosisDialogComponent>) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: this.fb.control('', Validators.required),
    });
  }

  register(values) {
    let diagnosis = {
      diagnosisName: values.name,
    } as Diagnosis
    this.diagnosisService.create(diagnosis).subscribe(value => {
      console.log(value);
      this.dialogRef.close();
    });
  }
}
