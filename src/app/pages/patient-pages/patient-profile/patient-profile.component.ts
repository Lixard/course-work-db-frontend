import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../core/services/patient.service";
import {ActivatedRoute} from "@angular/router";
import {Patient} from "../../../core/models/patient.model";

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient: Patient;

  constructor(private patientService: PatientService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.patientService.getById(patientId).subscribe(value => this.patient = value);
  }

}
