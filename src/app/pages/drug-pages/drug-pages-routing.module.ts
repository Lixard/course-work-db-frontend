import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DrugListComponent} from "./drug-list/drug-list.component";

const routes: Routes = [
  {
    path: '',
    component: DrugListComponent,
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
export class DrugPagesRoutingModule {}
