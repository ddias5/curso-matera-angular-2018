import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'main',
        component: MainComponent,
        children: [
          {
            path: 'usuario',
            loadChildren: './usuario/usuario.module#UsuarioModule'
          },
          {
            path: 'disciplina',
            loadChildren: './disciplina/disciplina.module#DisciplinaModule'
          },
          {
            path: 'relatorio',
            loadChildren: './relatorio/relatorio.module#RelatorioModule'
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
