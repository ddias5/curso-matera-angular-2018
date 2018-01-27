import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class UsuarioService {

  private mock = [
    { id: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil: "ALUNO" },
    { id: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil: "ALUNO" },
    { id: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil: "ALUNO" },
    { id: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil: "ALUNO" },
    { id: 5, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil: "ALUNO" }
  ]

  private _urlUsuario = environment.url + '/api/v1/usuarios';

  constructor(
    private _httpClient: HttpClient
  ) { }

  public carregar(id) {
    return this._httpClient.get<any>(`${this._urlUsuario}/${id}`)
  }

  public adicionar(usuario) {
    return this._httpClient.post(this._urlUsuario, usuario, {
      responseType: 'text'
    });
  }

  public excluir(id) {
    return this._httpClient.delete(
      `${this._urlUsuario}/${id}`,
      { responseType: 'text' }
    )
  }

  public editar(usuario) {
    return this._httpClient
      .put(
        `${this._urlUsuario}/${usuario.id}`,
        usuario,
        { responseType: 'text' }
      );
  }

  public listar() {
    return this._httpClient.get<Array<any>>(this._urlUsuario)
  }

}
