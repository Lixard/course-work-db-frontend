import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorListComponent} from './doctor-list/doctor-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {DoctorProfileComponent} from './doctor-profile/doctor-profile.component';
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {DoctorAppointmentsListComponent} from './doctor-profile/doctor-appointments-list/doctor-appointments-list.component';


@NgModule({
  declarations: [DoctorListComponent, DoctorProfileComponent, DoctorAppointmentsListComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class DoctorPagesModule {
}
