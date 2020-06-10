import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientProfileComponent} from './patient-profile/patient-profile.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSortModule} from "@angular/material/sort";
import {CoreModule} from "../../core/core.module";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {PatientAppointmentsListComponent} from './patient-profile/patient-appointments-list/patient-appointments-list.component';
import {AddPatientDialogComponent} from './add-patient-dialog/add-patient-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ChangePatientDialogComponent} from './change-patient-dialog/change-patient-dialog.component';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientProfileComponent,
    PatientAppointmentsListComponent,
    AddPatientDialogComponent,
    ChangePatientDialogComponent
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
    MatDialogModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
  ]
})
export class PatientPagesModule {
}
