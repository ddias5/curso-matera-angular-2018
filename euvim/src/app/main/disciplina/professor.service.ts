import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfessorService {

  private _url = environment.url + '/api/v1/usuarios'

  constructor(
    private _httpClient: HttpClient
  ) { }

  professores() {
    let params = new HttpParams().set('tipo', 'PROFESSOR');
    return this._httpClient.get<Array<any>>(this._url, { params });
  }

  public obter(id) {
    return this._httpClient.get<Array<any>>(`${this._url}/${id}`);
  }
}
