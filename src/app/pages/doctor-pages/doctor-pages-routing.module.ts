import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DoctorListComponent} from "./doctor-list/doctor-list.component";
import {DoctorProfileComponent} from "./doctor-profile/doctor-profile.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DoctorListComponent,
  },
  {
    path: ':id',
    component: DoctorProfileComponent,
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
export class DoctorPagesRoutingModule {}
