import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiagnosisListComponent} from './diagnosis-list/diagnosis-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AddDiagnosisDialogComponent} from './add-diagnosis-dialog/add-diagnosis-dialog.component';
import {ChangeDiagnosisDialogComponent} from './change-diagnosis-dialog/change-diagnosis-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [DiagnosisListComponent, AddDiagnosisDialogComponent, ChangeDiagnosisDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class DiagnosisPagesModule {
}
