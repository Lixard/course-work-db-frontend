import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DrugListComponent} from './drug-list/drug-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AddDrugDialogComponent} from './add-drug-dialog/add-drug-dialog.component';
import {ChangeDrugDialogComponent} from './change-drug-dialog/change-drug-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [DrugListComponent, AddDrugDialogComponent, ChangeDrugDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class DrugPagesModule {
}
