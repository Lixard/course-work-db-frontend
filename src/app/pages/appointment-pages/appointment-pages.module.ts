import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentListComponent} from './appointment-list/appointment-list.component';
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AddAppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  exports: [
    AddAppointmentComponent,
    AppointmentListComponent
  ]
})
export class AppointmentPagesModule { }
