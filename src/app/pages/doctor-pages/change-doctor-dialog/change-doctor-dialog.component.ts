import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorService} from "../../../core/services/doctor.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Doctor} from "../../../core/models/doctor.model";

@Component({
  selector: 'app-change-doctor-dialog',
  templateUrl: './change-doctor-dialog.component.html',
  styleUrls: ['./change-doctor-dialog.component.css']
})
export class ChangeDoctorDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private doctorService: DoctorService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ChangeDoctorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Doctor) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      lastName: this.fb.control(this.data.lastName, Validators.required),
      firstName: this.fb.control(this.data.firstName, Validators.required),
      secondName: this.fb.control(this.data.secondName)
    });
  }

  register(values) {
    let doctor = {
      lastName: values.lastName,
      firstName: values.firstName,
      secondName: values.secondName
    } as Doctor
    this.doctorService.update(this.data.doctorId, doctor).subscribe(value => {
      console.log(value);
      this.dialogRef.close();
    });
  }
}
