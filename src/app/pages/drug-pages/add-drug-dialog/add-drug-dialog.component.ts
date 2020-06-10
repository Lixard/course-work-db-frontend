import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Drug} from "../../../core/models/drug.model";
import {DrugService} from "../../../core/services/drug.service";

@Component({
  selector: 'app-add-drug-dialog',
  templateUrl: './add-drug-dialog.component.html',
  styleUrls: ['./add-drug-dialog.component.css']
})
export class AddDrugDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private drugService: DrugService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddDrugDialogComponent>) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: this.fb.control('', Validators.required),
      methodOfTaking: this.fb.control(''),
      dosage: this.fb.control(''),
      descriptionOfAction: this.fb.control(''),
      sideEffects: this.fb.control('')
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
    this.drugService.create(drug).subscribe(value => {
      console.log(value);
      this.dialogRef.close();
    });
  }
}
