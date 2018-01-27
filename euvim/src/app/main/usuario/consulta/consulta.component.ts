import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {

  public displayedColumns = ['nome', 'login', 'email', 'perfil', 'id'];
  public dataSource = null;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {

  }

  private obterLista() {
    let lista =
      this._usuarioService
        .listar()
        .subscribe(ok => {
          this.dataSource = new MatTableDataSource<any>(ok)
        }, erro => console.log(erro));
  }

  public excluir(id) {
    this._usuarioService.excluir(id)
      .subscribe(ok => {
        this.obterLista();
      });
  }

  public editar(id) {
    this._router.navigate(['/main/usuario/editar', id]);
  }

  ngOnInit() {
    this.obterLista();
  }

}

export interface Element {
  id: number;
  nome: string;
  login: number;
  email: string;
  perfil: string;
}

export class UsuarioDataSource extends DataSource<any> {
  connect(): Observable<any[]> {
    return Observable.of([
      { id: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil: "Aluno" },
      { id: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil: "Aluno" },
      { id: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil: "Aluno" },
      { id: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil: "Aluno" },
      { id: 5, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil: "Aluno" }
    ]);
  }
  disconnect() { }
}
