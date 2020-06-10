import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DrugService} from "../../../core/services/drug.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Drug} from "../../../core/models/drug.model";

@Component({
  selector: 'app-change-drug-dialog',
  templateUrl: './change-drug-dialog.component.html',
  styleUrls: ['./change-drug-dialog.component.css']
})
export class ChangeDrugDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private drugService: DrugService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ChangeDrugDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Drug) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: this.fb.control(this.data.name, Validators.required),
      methodOfTaking: this.fb.control(this.data.methodOfTaking),
      dosage: this.fb.control(this.data.dosage),
      descriptionOfAction: this.fb.control(this.data.descriptionOfAction),
      sideEffects: this.fb.control(this.data.sideEffects)
    });
  }

  register(values) {
    let drug = {
      name: values.name,
      methodOfTaking: values.methodOfTaking,
      dosage: values.dosage,
      descriptionOfAction: values.descriptionOfAction,
      sideEffects: values.sideEffects
    } as Drug
    this.drugService.update(this.data.drugId, drug).subscribe(value => {
      console.log(value);
      this.dialogRef.close();
    });
  }

}
