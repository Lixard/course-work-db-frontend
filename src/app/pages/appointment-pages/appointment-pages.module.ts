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
import {MatSortModule} from "@angular/material/sort";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {DrugTableForAppointmentComponent} from './drug-table-for-appointment/drug-table-for-appointment.component';
import {DiagnosisTableForAppointmentComponent} from './diagnosis-table-for-appointment/diagnosis-table-for-appointment.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AddAppointmentComponent,
    AppointmentListComponent,
    DrugTableForAppointmentComponent,
    DiagnosisTableForAppointmentComponent
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
    MatTableModule,
    MatSortModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatCheckboxModule,
    RouterModule,
  ],
  exports: [
    AddAppointmentComponent,
    AppointmentListComponent
  ]
})
export class AppointmentPagesModule {
}
