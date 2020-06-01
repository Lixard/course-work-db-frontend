import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";

const routes: Routes = [
  {
    path: 'add',
    component: AddAppointmentComponent,
  }
];

@NgModule({
  declarations: [
    AddAppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    AddAppointmentComponent
  ]
})
export class AppointmentPagesRoutingModule {}
