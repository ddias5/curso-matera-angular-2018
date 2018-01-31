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
  declarations: [MainComponent]
})
export class MainModule { }
