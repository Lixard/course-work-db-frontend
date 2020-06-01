import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";


@NgModule({
  declarations: [
    AddAppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppointmentPagesModule { }
