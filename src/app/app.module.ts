import 'reflect-metadata';
import '../polyfills';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';

import {AppRoutingModule} from './app-routing.module';


import {HomeModule} from './pages/home-page/home.module';

import {AppComponent} from './app.component';
import {AppointmentPagesModule} from "./pages/appointment-pages/appointment-pages.module";
import {DiagnosisPagesModule} from "./pages/diagnosis-pages/diagnosis-pages.module";
import {DrugPagesModule} from "./pages/drug-pages/drug-pages.module";
import {PatientPagesModule} from "./pages/patient-pages/patient-pages.module";
import {DoctorPagesModule} from "./pages/doctor-pages/doctor-pages.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    AppRoutingModule,
    AppointmentPagesModule,
    DiagnosisPagesModule,
    DoctorPagesModule,
    DrugPagesModule,
    PatientPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
