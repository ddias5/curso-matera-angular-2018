import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';

import {
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
} from '@angular/material';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { PresencaComponent } from './relatorio/presenca/presenca.component';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    MainComponent,
    RelatorioComponent,
    PresencaComponent
  ]
})
export class MainModule { }
