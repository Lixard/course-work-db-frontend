import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorService} from "../../../core/services/doctor.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DownloadFileService} from "../../../core/services/download-file.service";
import * as moment from "moment";

@Component({
  selector: 'app-export-doctor-patients-dialog',
  templateUrl: './export-doctor-patients-dialog.component.html',
  styleUrls: ['./export-doctor-patients-dialog.component.css']
})
export class ExportDoctorPatientsDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private doctorService: DoctorService,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private downloadFileService: DownloadFileService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      dateStart: this.fb.control(undefined, Validators.required),
      dateEnd: this.fb.control(undefined, Validators.required)
    });
  }

  sendRequest(values) {
    const dateStart = moment(values.dateStart);
    const dateEnd = moment(values.dateEnd);
    this.doctorService.getDoctorPatientsForPeriod(this.data, dateStart.format('DD-MM-YYYY_HH:mm:ss'), dateEnd.format('DD-MM-YYYY_HH:mm:ss'))
      .subscribe(value => this.downloadFileService.downLoadFile(value, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'));
  }
}
