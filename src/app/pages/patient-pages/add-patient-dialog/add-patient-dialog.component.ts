import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {PatientService} from "../../../core/services/patient.service";
import {Patient, Sex} from "../../../core/models/patient.model";
import * as moment from "moment";

@Component({
  selector: 'app-add-patient-dialog',
  templateUrl: './add-patient-dialog.component.html',
  styleUrls: ['./add-patient-dialog.component.css']
})
export class AddPatientDialogComponent implements OnInit {

  form: FormGroup;
  sexes: Sex[] = [Sex.MALE, Sex.FEMALE, Sex.UNDEFINED];

  constructor(private dialogRef: MatDialogRef<AddPatientDialogComponent>,
              private patientService: PatientService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.form = this.fb.group({
      lastName: this.fb.control('', Validators.required),
      firstName: this.fb.control('', Validators.required),
      secondName: this.fb.control(''),
      sex: this.fb.control(undefined, Validators.required),
      birthday: this.fb.control('', Validators.required),
      policy: this.fb.control('', [Validators.maxLength(16), Validators.minLength(16), Validators.required]),
      serial: this.fb.control('', [Validators.maxLength(4), Validators.minLength(4), Validators.required]),
      number: this.fb.control('', [Validators.maxLength(6), Validators.minLength(6), Validators.required])
    });
  }

  register(values) {
    const dateMoment = moment(values.date);
    let patient = {
      lastName: values.lastName,
      firstName: values.firstName,
      secondName: values.secondName,
      sex: values.sex,
      birthday: dateMoment.format('DD-MM-YYYY'),
      policy: values.policy,
      serialPassport: values.serial,
      numberPassport: values.number
    } as Patient
    this.patientService.create(patient).subscribe(value => {
      console.log(value);
      this.dialogRef.close();
    });
  }
}
