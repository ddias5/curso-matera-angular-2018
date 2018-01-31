import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RelatorioRouting } from './relatorio.routing';
import { RelatorioComponent } from './relatorio.component';
import { PresencaComponent } from './presenca/presenca.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RelatorioRouting
  ],
  declarations: [RelatorioComponent, PresencaComponent]
})
export class RelatorioModule { }
