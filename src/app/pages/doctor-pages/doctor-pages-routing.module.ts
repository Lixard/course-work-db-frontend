import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DoctorListComponent} from "./doctor-list/doctor-list.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DoctorListComponent,
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
