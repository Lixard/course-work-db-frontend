import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../core/models/doctor.model";
import {DoctorService} from "../../../core/services/doctor.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor: Doctor;

  constructor(private doctorService: DoctorService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const doctorId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.doctorService.getById(doctorId).subscribe(value => this.doctor = value);
  }

}
