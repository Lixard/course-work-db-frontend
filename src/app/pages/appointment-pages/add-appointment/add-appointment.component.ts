import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Patient} from "../../../core/models/patient.model";
import {PatientService} from "../../../core/services/patient.service";
import {Observable} from "rxjs";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Doctor} from "../../../core/models/doctor.model";
import {DoctorService} from "../../../core/services/doctor.service";
import {map, startWith} from "rxjs/operators";
import {Appointment} from "../../../core/models/appointment.model";
import {AppointmentService} from "../../../core/services/appointment.service";
import {Router} from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  form: FormGroup;

  patients: Patient[];
  filteredPatientOptions: Observable<Patient[]>;
  selectedPatient: Patient;

  doctors: Doctor[];
  filteredDoctorOptions: Observable<Doctor[]>;
  selectedDoctor: Doctor;

  constructor(private fb: FormBuilder,
              private patientService: PatientService,
              private doctorService: DoctorService,
              private appointmentService: AppointmentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.buildFrom();
    this.patientService.getPatients().subscribe(values => {
      this.patients = values;
      this.filteredPatientOptions = this.form.get('patient').valueChanges.pipe(
        startWith(''),
        map(term => this.patientFilter(term))
      );
    });
    this.doctorService.getDoctors().subscribe(values => {
      this.doctors = values;
      this.filteredDoctorOptions = this.form.get('doctor').valueChanges.pipe(
        startWith(''),
        map(term => this.doctorFilter(term))
      );
    });
  }

  getOptionText(option) {
    return option ? option.lastName + ' ' + option.firstName + ' ' + option.secondName : null;
  }

  selectPatient($event: MatAutocompleteSelectedEvent) {
    console.log($event.option.value);
    this.selectedPatient = $event.option.value;
    this.form.get('patient').disable();
  }

  clearPatientButton() {
    this.selectedPatient = null;
    this.form.get('patient').enable();
    this.form.get('patient').setValue('');
  }

  clearDoctorButton() {
    this.selectedDoctor = null;
    this.form.get('doctor').enable();
    this.form.get('doctor').setValue('');
  }

  selectDoctor($event: MatAutocompleteSelectedEvent) {
    console.log($event.option.value);
    this.selectedDoctor = $event.option.value;
    this.form.get('doctor').disable();
  }

  register(values) {
    const dateMoment = moment(values.date);
    let appointment = {
      patientId: this.selectedPatient.patientId,
      doctorId: this.selectedDoctor.doctorId,
      place: values.place,
      appointmentDate: dateMoment.format('DD-MM-YYYY HH:mm:ss'),
      symptoms: values.symptoms
    } as Appointment
    this.appointmentService.create(appointment).subscribe(() => {
      console.log(appointment);
    });
  }

  private buildFrom(): void {
    this.form = this.fb.group({
      patient: this.fb.control('', [Validators.required, this.objectSetValidator]),
      doctor: this.fb.control('', [Validators.required, this.objectSetValidator]),
      place: this.fb.control('', Validators.required),
      date: this.fb.control(null, Validators.required),
      symptoms: this.fb.control('')
    });
  }

  private objectSetValidator = (control: FormControl): ValidationErrors => {
    return control.disabled ? null : {objectNotSet: 'Необходимо выбрать объект из списка'};
  };

  private patientFilter(value: string): Patient[] {
    return this.patients.filter((s) => new RegExp(value, 'gi').test(s.lastName + ' ' + s.firstName + ' ' + s.secondName));
  }

  private doctorFilter(value: string): Doctor[] {
    return this.doctors.filter((s) => new RegExp(value, 'gi').test(s.lastName + ' ' + s.firstName + ' ' + s.secondName));
  }
}
