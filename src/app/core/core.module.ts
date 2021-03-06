import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {SexPipePipe} from './pipes/sex-pipe.pipe';
import {SexEnumPipePipe} from './pipes/sex-enum-pipe.pipe';

@NgModule({
  declarations: [
    ToolbarComponent,
    SexPipePipe,
    SexEnumPipePipe
  ],
  exports: [
    ToolbarComponent,
    SexPipePipe,
    SexEnumPipePipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ]
})
export class CoreModule {
}
