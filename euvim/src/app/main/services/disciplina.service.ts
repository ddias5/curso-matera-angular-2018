import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class DisciplinaService {

  private url = environment.url + '/api/v1/disciplinas';
  private urlQr = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';

  constructor(
    private _httpClient: HttpClient
  ) { }

  public gerarQr(info) {
    return this._httpClient
      .get(`${this.urlQr}${info}`);
  }

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

  public carregar(id) {
    return this._httpClient.get<Array<any>>(`${this.url}/${id}`);
  }
}
