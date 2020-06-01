import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";
import {AppointmentListComponent} from "./appointment-list/appointment-list.component";

const routes: Routes = [
  {
    path: 'add',
    component: AddAppointmentComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: AppointmentListComponent,
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppointmentPagesRoutingModule {}
