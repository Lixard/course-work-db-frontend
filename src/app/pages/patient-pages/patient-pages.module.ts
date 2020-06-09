import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientProfileComponent} from './patient-profile/patient-profile.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSortModule} from "@angular/material/sort";
import {CoreModule} from "../../core/core.module";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {PatientAppointmentsListComponent} from './patient-profile/patient-appointments-list/patient-appointments-list.component';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientProfileComponent,
    PatientAppointmentsListComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSortModule,
    CoreModule,
    MatCardModule,
    FlexModule,
    MatButtonModule,
  ]
})
export class PatientPagesModule {
}
