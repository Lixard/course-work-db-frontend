import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorListComponent} from './doctor-list/doctor-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [DoctorListComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ]
})
export class DoctorPagesModule {
}
