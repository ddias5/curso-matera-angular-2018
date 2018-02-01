import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatButtonModule,
  MatTooltipModule,
  MatSelectModule,
  MatOptionModule,
  MatNativeDateModule,
  MatDialogModule
} from '@angular/material';

import { RelatorioRouting } from './relatorio.routing';
import { RelatorioComponent } from './relatorio.component';
import { PresencaComponent } from './presenca/presenca.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisciplinaService } from '../services/disciplina.service';
import { RelatorioService } from './relatorio.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RelatorioRouting,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [DisciplinaService, RelatorioService],
  declarations: [RelatorioComponent, PresencaComponent]
})
export class RelatorioModule { }
