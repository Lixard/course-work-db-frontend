import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DiagnosisListComponent} from "./diagnosis-list/diagnosis-list.component";

const routes: Routes = [
  {
    path: '',
    component: DiagnosisListComponent,
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
export class DiagnosisPagesRoutingModule {}
