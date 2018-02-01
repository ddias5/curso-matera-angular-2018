import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRouting } from './login.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoginRouting,
    HttpClientModule
  ],
  providers: [
    LoginService,
    HttpClient
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
