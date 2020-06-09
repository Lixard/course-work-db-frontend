import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiagnosisListComponent} from './diagnosis-list/diagnosis-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [DiagnosisListComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class DiagnosisPagesModule {
}
