import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class DisciplinaService {

  private _urlDisciplina = environment.url + '/api/v1/disciplinas';

  constructor(
    private _httpClient: HttpClient
  ) { }

  public carregar(id) {
    return this._httpClient.get<any>(`${this._urlDisciplina}/${id}`)
  }

  public adicionar(disciplina) {
    return this._httpClient.post(this._urlDisciplina, disciplina, {
      responseType: 'text'
    });
  }

  public excluir(id) {
    return this._httpClient.delete(
      `${this._urlDisciplina}/${id}`,
      { responseType: 'text' }
    )
  }

  public editar(disciplina) {
    return this._httpClient
      .put(
        `${this._urlDisciplina}/${disciplina.id}`,
        disciplina,
        { responseType: 'text' }
      );
  }

  public listar() {
    return this._httpClient.get<Array<any>>(this._urlDisciplina)
  }

}
