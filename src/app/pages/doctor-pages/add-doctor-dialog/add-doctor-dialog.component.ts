import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorService} from "../../../core/services/doctor.service";
import {Doctor} from "../../../core/models/doctor.model";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-doctor-dialog',
  templateUrl: './add-doctor-dialog.component.html',
  styleUrls: ['./add-doctor-dialog.component.css']
})
export class AddDoctorDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private doctorService: DoctorService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddDoctorDialogComponent>) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      lastName: this.fb.control('', Validators.required),
      firstName: this.fb.control('', Validators.required),
      secondName: this.fb.control('')
    });
  }

  register(values) {
    let doctor = {
      lastName: values.lastName,
      firstName: values.firstName,
      secondName: values.secondName
    } as Doctor
    this.doctorService.create(doctor).subscribe(value => {
      console.log(value);
      this.dialogRef.close();
    });
  }

}
