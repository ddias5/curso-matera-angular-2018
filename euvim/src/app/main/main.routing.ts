import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'usuario',
            canActivate: [AuthGuard],
            loadChildren: './usuario/usuario.module#UsuarioModule'
          },
          {
            path: 'disciplina',
            canActivate: [AuthGuard],
            loadChildren: './disciplina/disciplina.module#DisciplinaModule'
          },
          {
            path: 'relatorio',
            canActivate: [AuthGuard],
            loadChildren: './relatorio/relatorio.module#RelatorioModule'
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
