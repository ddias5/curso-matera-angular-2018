import 'rxjs/add/observable/of';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { Observable } from 'rxjs/Observable';
import { DisciplinaService } from './../../services/disciplina.service';
import { Router } from '@angular/router';
import { ProfessorComponent } from '../professor/professor.component';
import { QrcodeComponent } from '../qrcode/qrcode.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {

  public displayedColumns = [
    'descricao',
    'professores',
    'dataInicio',
    'dataTermino',
    'segmento',
    'id'
  ];
  public dataSource = null;

  constructor(
    private _disciplinaService: DisciplinaService,
    private _router: Router,
    private dialog: MatDialog
  ) { }

  private obterLista() {
    let lista =
      this._disciplinaService
        .listar()
        .subscribe(ok => {
          this.dataSource = new MatTableDataSource<any>(ok)
        }, erro => console.log(erro));
  }

  public excluir(id) {
    this._disciplinaService.excluir(id)
      .subscribe(ok => {
        this.obterLista();
      });
  }

  public exibirProfessores(professores) {
    let dialogRef = this.dialog.open(ProfessorComponent, {
      width: '300px',
      data: { professores }
    })
  }

  public exibirQrcode(disciplina) {
    let dialogRef = this.dialog.open(QrcodeComponent, {
      width: '300px',
      data: {
        id: disciplina.id,
        descricao: disciplina.descricao,
        data: new Date()
      }
    })
  }
  
  public editar(id) {
    this._router.navigate(['/main/disciplina/editar', id]);
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
