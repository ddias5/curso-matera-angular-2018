import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DisciplinaService } from './../../services/disciplina.service';
import { ProfessorService } from '../professor.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  public segmentos = [
    { id: 'BACKEND', descricao: 'Back-end' },
    { id: 'FRONTEND', descricao: 'Front-end' },
    { id: 'MOBILE', descricao: 'Mobile' }
  ];
  public form: FormGroup;
  public id;

  public professores = [];
  public professorSelecionado;

  constructor(
    private _formBuilder: FormBuilder,
    private _activeRouter: ActivatedRoute,
    private _disciplinaService: DisciplinaService,
    private _professorService: ProfessorService,
    private _router: Router
  ) {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      professores: this._formBuilder.array([]),
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
      segmento: ['', Validators.required],
      urlLogo: ['']
    })
  }

  public adicionarProfessor() {
    if (this.professorSelecionado) {
      let listProfessores = <FormArray>this.form.get('professores');
      this.professorSelecionado.selecionado = true;
      listProfessores.value.push(this.professorSelecionado.id);
      delete this.professorSelecionado;
    }
  }

  public removerProfessor(id) {
    let listProfessores = <FormArray>this.form.get('professores');
    let index = listProfessores.value.findIndex(prof => prof == id)
    if (index > -1) {
      listProfessores.value.splice(index, 1);
      this.professores.find(prof => prof.id == id).selecionado = false;
    }
  }

  public notFound(e) {
    e.target.src = 'http://placehold.it/50/009688/ffffff/?text=LOGO'
  }

  public nomeProfessor(id) {
    return (this.professores.find(prof => prof.id == id)).nome
  }

  ngOnInit() {
    this._professorService.professores()
      .subscribe(ok => {
        this.professores = ok;
        this.obterRegistroEdicao();
      })
  }

  private obterRegistroEdicao() {
    this._activeRouter.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this._disciplinaService.carregar(this.id)
          .subscribe(retorno => {
            let resultado = Object.assign({}, retorno);
            resultado.professores = [];
            this.form.setValue(resultado);
            retorno.professores.forEach(id => {
              this.professorSelecionado = this.professores.find(prof => prof.id == id);
              this.adicionarProfessor();
            });
          });
      }
    });
  }

  public salvar() {
    if (this.form.valid) {
      if (this.id) {
        this._disciplinaService
          .editar(this.form.value)
          .subscribe(ok => {
            this.form.reset();
            this._router.navigate(['/main/disciplina/consulta']);
          }, err => console.log(err))
      } else {
        this._disciplinaService
          .adicionar(this.form.value)
          .subscribe(ok => {
            this.form.reset();
            this._router.navigate(['/main/disciplina/consulta']);
          })
      }
    }
  }
}

export interface Perfil {
  id: string;
  descricao: string;
}
