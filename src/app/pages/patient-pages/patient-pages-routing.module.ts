import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientListComponent} from "./patient-list/patient-list.component";
import {PatientProfileComponent} from "./patient-profile/patient-profile.component";

const routes: Routes = [
  {
    path: '',
    component: PatientListComponent,
  },
  {
    path: ':id',
    component: PatientProfileComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PatientPagesRoutingModule {}
