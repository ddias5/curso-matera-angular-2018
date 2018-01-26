import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  private mock = [
    { id: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil: "Aluno" },
    { id: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil: "Aluno" },
    { id: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil: "Aluno" },
    { id: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil: "Aluno" },
    { id: 5, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil: "Aluno" }
  ]

  constructor() { }

  public carregar(id) {
    return this.mock.find(user => user.id === id);
  }
  public adicionar(usuario) {
    let newId = 0;
    this.mock.forEach(user => {
      newId = newId < user.id ? user.id : newId;
    })
    usuario.id = newId;
    this.mock.push(usuario);
  }
  public excluir(id) {
    this.mock.splice(this.mock.findIndex(user => user.id = id), 1);
  }
  public editar(usuario) {
    let i = this.mock.findIndex(user => user.id == usuario.id);
    if (i > -1) this.mock[i] = usuario;
  }
  public listar() {
    return this.mock;
  }

}
