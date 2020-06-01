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
    path: 'appointment',
    loadChildren: () => import('./pages/appointment-pages/appointment-pages-routing.module').then(m => m.AppointmentPagesRoutingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
