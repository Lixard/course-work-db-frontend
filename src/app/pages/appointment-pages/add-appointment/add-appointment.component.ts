import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildFrom();
  }

  ngOnInit(): void {
    this.form.reset();
  }


  private buildFrom(): void {
    this.form = this.fb.group({
      someField: this.fb.control(null)
    });
  }
}
