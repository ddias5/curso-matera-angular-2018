import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public login: boolean = false;
  public erro;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.form = _formBuilder.group({
      "usuario": [null, Validators.compose([Validators.required, Validators.email])],
      "senha": [null, Validators.required]
    });
  }

  ngOnInit() {
    this.erro = null;
    this.login = false;
  }

  realizarLogin() {
    this.login = true;
    this._loginService.login(this.form.value).subscribe(res => {
      sessionStorage.setItem('access', JSON.stringify(res));
      this._router.navigate(['/main']);
      this.login = false;
    }, err => {
      this.login = false;
      this.erro = err;
    }
    );
  }
}
