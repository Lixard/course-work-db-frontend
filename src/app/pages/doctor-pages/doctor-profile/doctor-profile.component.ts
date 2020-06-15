import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../core/models/doctor.model";
import {DoctorService} from "../../../core/services/doctor.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ExportDoctorPatientsDialogComponent} from "../export-doctor-patients-dialog/export-doctor-patients-dialog.component";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor: Doctor;

  constructor(private doctorService: DoctorService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    const doctorId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.doctorService.getById(doctorId).subscribe(value => this.doctor = value);
  }

  exportPatientsForPeriod() {
    const dialogRef = this.dialog.open(ExportDoctorPatientsDialogComponent, {
      data: this.doctor.doctorId
    });
  }
}
