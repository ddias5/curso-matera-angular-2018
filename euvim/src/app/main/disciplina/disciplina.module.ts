import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DisciplinaRouting } from './disciplina.routing';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms'
import {
  MatTableModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { DisciplinaService } from './disciplina.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DisciplinaRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [
    DisciplinaService,
    FormBuilder,
    HttpClient
  ],
  declarations: [ConsultaComponent, FormularioComponent]
})
export class DisciplinaModule { }
