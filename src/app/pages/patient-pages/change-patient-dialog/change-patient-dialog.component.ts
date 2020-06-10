import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Patient, Sex} from "../../../core/models/patient.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PatientService} from "../../../core/services/patient.service";
import * as moment from "moment";

@Component({
  selector: 'app-change-patient-dialog',
  templateUrl: './change-patient-dialog.component.html',
  styleUrls: ['./change-patient-dialog.component.css']
})
export class ChangePatientDialogComponent implements OnInit {

  form: FormGroup;
  sexes: Sex[] = [Sex.MALE, Sex.FEMALE, Sex.UNDEFINED];

  constructor(private dialogRef: MatDialogRef<ChangePatientDialogComponent>,
              private patientService: PatientService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: Patient) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.form = this.fb.group({
      lastName: this.fb.control(this.data.lastName, Validators.required),
      firstName: this.fb.control(this.data.firstName, Validators.required),
      secondName: this.fb.control(this.data.secondName),
      sex: this.fb.control(this.data.sex, Validators.required),
      birthday: this.fb.control(moment(this.data.birthday, 'DD-MM-YYYY').format("YYYY-MM-DD"), Validators.required),
      policy: this.fb.control(this.data.policy, [Validators.maxLength(16), Validators.minLength(16), Validators.required]),
      serial: this.fb.control(this.data.serialPassport, [Validators.maxLength(4), Validators.minLength(4), Validators.required]),
      number: this.fb.control(this.data.numberPassport, [Validators.maxLength(6), Validators.minLength(6), Validators.required])
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
    this.patientService.update(this.data.patientId, patient).subscribe(value => {
      console.log(value);
      this.dialogRef.close();
    });
  }

}
