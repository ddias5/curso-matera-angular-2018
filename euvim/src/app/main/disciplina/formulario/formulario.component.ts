import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  public form: FormGroup;
  public id;
  public professores = []

  public segmentos = [
    { id: 'BACKEND', descricao: 'Back-end' },
    { id: 'FRONTEND', descricao: 'Front-end' },
    { id: 'MOBILE', descricao: 'Mobile' }
  ];

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

  ngOnInit() {
    this._professorService.professores()
      .subscribe(ok => {
        this.professores = ok;
      })
    this._activeRouter.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this._disciplinaService.carregar(this.id)
          .subscribe(retorno => {
            retorno['senha'] = null;
            retorno['confirmacao'] = null;
            delete retorno.urlFoto;
            this.form.get('senha').setValidators(null);
            this.form.get('confirmacao').setValidators(null);
            this.form.setValue(retorno);
          })
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
            this._router.navigate(['/main/usuario/consulta']);
          }, err => console.log(err))
      } else {
        this._disciplinaService
          .adicionar(this.form.value)
          .subscribe(ok => {
            this.form.reset();
            this._router.navigate(['/main/usuario/consulta']);
          })
      }
    }
  }

}

export interface Perfil {
  id: string;
  descricao: string;
}
