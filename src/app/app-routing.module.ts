import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeRoutingModule} from './pages/home-page/home-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'appointments',
    loadChildren: () => import('./pages/appointment-pages/appointment-pages-routing.module').then(m => m.AppointmentPagesRoutingModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./pages/doctor-pages/doctor-pages-routing.module').then(m => m.DoctorPagesRoutingModule)
  },
  {
    path: 'drugs',
    loadChildren: () => import('./pages/drug-pages/drug-pages-routing.module').then(m => m.DrugPagesRoutingModule)
  },
  {
    path: 'diagnoses',
    loadChildren: () => import('./pages/diagnosis-pages/diagnosis-pages-routing.module').then(m => m.DiagnosisPagesRoutingModule)
  },
  {
    path: 'patients',
    loadChildren: () => import('./pages/patient-pages/patient-pages-routing.module').then(m => m.PatientPagesRoutingModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
