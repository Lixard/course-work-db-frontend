import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientProfileComponent} from './patient-profile/patient-profile.component';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientPagesModule { }
