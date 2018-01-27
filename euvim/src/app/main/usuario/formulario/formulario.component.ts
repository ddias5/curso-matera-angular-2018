import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EqualsPasswordValidator } from './../../../validators/equalsPasword.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  public perfis: Perfil[] = [
    {
      id: "PROFESSOR",
      descricao: "Professor"
    },
    {
      id: "ADMINISTRADOR",
      descricao: "Administrador"
    },
    {
      id: "ALUNO",
      descricao: "Aluno"
    }
  ]

  public form: FormGroup;
  public id;

  constructor(
    private _formBuilder: FormBuilder,
    private _activeRouter: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.form = this._formBuilder.group({
      id: '',
      nome: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      login: ['', Validators.required],
      perfil: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacao: ['', Validators.required]
    }, {
        validator: EqualsPasswordValidator.validate('senha', 'confirmacao')
      })
  }

  ngOnInit() {
    this._activeRouter.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this._usuarioService.carregar(this.id)
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
        this._usuarioService
          .editar(this.form.value)
          .subscribe(ok => {
            this.form.reset();
            this._router.navigate(['/main/usuario/consulta']);
          }, err => console.log(err))
      } else {
        this._usuarioService
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
