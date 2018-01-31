import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class DisciplinaService {

  private url = environment.url + '/api/v1/disciplinas';

  constructor(
    private _httpClient: HttpClient
  ) { }

  public adicionar(disciplina) {
    return this._httpClient.post(this.url, disciplina, {
      responseType: 'text'
    });
  }

  public excluir(id) {
    return this._httpClient.delete(
      `${this.url}/${id}`,
      { responseType: 'text' }
    );
  }

  public editar(disciplina) {
    return this._httpClient
      .put(
        `${this.url}/${disciplina.id}`,
        disciplina,
        { responseType: 'text' }
      );
  }

  public listar() {
    return this._httpClient.get<Array<any>>(this.url);
  }

  public obter(id) {
    return this._httpClient.get<Array<any>>(`${this.url}/${id}`);
  }
}
