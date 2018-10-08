import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DisciplinaService } from '../../services/disciplina.service';
import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {
  
  public relatorio = [];
  public disciplinas = [];
  public form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _disciplinaService: DisciplinaService,
    private _relatorioService: RelatorioService
  ) { }

  ngOnInit() {
    
    this.form = this._formBuilder.group({
      disciplina: [''],
      dataInicio: [''],
      dataFim: ['']
    });
    
    this._disciplinaService
      .listar()
      .subscribe(res => {
        this.disciplinas = res;
      })
  }

  public gerarRelatorio() {
    this._relatorioService
      .listarPresencaPorDisciplina(this.form.value)
      .subscribe(res => {
        this.relatorio = res;
      })
  }

}
