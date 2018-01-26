## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 01**

Sumário
=======

* [Conceitos](#conceitos)
  * [O que é um Framework (Javascript)?](#o-que-é-um-framework-javascript)
  * [O que é SPA e como se comporta?](#o-que-é-spa-e-como-se-comporta)
  * [O que é o Angular (e TypeScript)?](#o-que-é-o-angular-e-typescript)
  * [O que é API?](#o-que-é-api)
  * [O que é REST?](#o-que-é-rest)
  * [O que é Mock?](#o-que-é-mock)
* [Angular](#angular)
  * [Componentes](#componentes)
  * [Diretivas](#diretivas)
  * [Services](#services)
  * [Arquitetura](#arquitetura)
* [Hands-on](#hands-on)
  * [Node](#node)
  * [NPM](#npm)
  * [NVM](#nvm)
  * [Angular CLI](#angular-cli)
  * [Primeiro Projeto](#primeiro-projeto)
  * [Utilizando Componente](#utilizando-componente)

Conceitos
=========

O que é um Framework (JavaScript)?
----------------------------------

  Um framework para aplicações web é um framework de software designado para suportar o desenvolvimento de sites web dinâmicos, aplicações Web e serviços Web. O framework destina-se a aliviar a sobrecarga associada a atividades comuns realizadas em desenvolvimento Web. Por exemplo, muitos frameworks fornecem bibliotecas para acesso à banco de dados, frameworks de modelagem e gerenciamento de sessão, e geralmente promovem a reutilização de código.

  Os frameworks também trouxeram o uso de padrões de desenvolvimento, aumentando o "poder" de uma aplicação do lado cliente, especialmente quando falamos de SPA (Single Page Application), onde é possível tratar o Front-End e o Back-End de forma quase independente.

O que é SPA e como se comporta?
-------------------------------
  
  Como conceito mais básico e simplista do Single Page Application (SPA), podemos dizer que trata-se de uma aplicação que não faz refresh no navegador ao mudar de página. 
  
  O SPA é uma tecnologia denominada de Client-Side, ou seja, todos os processos estão sendo executados no lado do cliente, ou seja no navegador do usuário. (Com exceção de alguns processos realizados com outras tecnologias, como o React, que permite renderizar no lado servidor)
  
  A comunicação com o back-end se dá através de chamadas Ajax para os end-points específicos de uma API, e é exatamente nesse momento que as aplicações SPA mostram todo o seu brilho, pois uma aplicação SPA bem feita é agnóstica ao back-end, não sabendo e não se importando se a aplicação foi feita em Node, PHP, Java, Ruby, Python, Go, Elixir, ou qualquer outra linguagem. 
  
  O router é uma peça importantíssima no modelo de desenvolvimento de SPAs. É ele que define/constrói a tela para o usuário, permitindo que, mesmo após um refresh, a página volte ao seu estado anterior ou a um estado próximo disso É muito comum salvar informações localmente no navegador do usuário (O desenvolvimento mobile híbrido segue uma lógica parecida). Em geral é armazenado um token ou qualquer informação que possa identificar o usuário e sua máquina, fazendo do localStorage. 

O que é o Angular (e TypeScript)?
---------------------------------

  Antes de entender o que é Angular é preciso entender o que seja o TypeScript, que foi adotado desde a versão 2 do Framework.
  
  O TypeScript possibilita que você escreva código JavaScript na forma que foi acostumado quando aprendeu Orientação a Objetos. Assim é possível criar métodos que retornem um valor com tipo definido. 
  
  No final, TypeScript pega o seu código cheio de classes e transforma em JavaScript puro, no qual o browser vai compreender. No próprio site é definido que o TypeScript compila para JavaScript, o que é um termo **tecnicamente errado**, mas cada vez mais aceito, dado que aquele código “malucão” em JavaScript pode ser encarado como código de máquina.

O que é API?
------------

  API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".
  
  Através das APIs, os aplicativos podem se comunicar uns com os outros sem conhecimento ou intervenção dos usuários. Elas funcionam através da comunicação de diversos códigos, definindo comportamentos específicos de determinado objeto em uma interface. A API liga as diversas funções em um site de maneira que possam ser utilizadas em outras aplicações.

O que é REST?
-------------

  O termo REST foi definido por Roy T. Fielding em sua tese de PhD. Roy foi um dos principais desenvolvedores de muitos dos protocolos Web essenciais, incluindo HTTP e URIs, e ele formalizou várias das idéias por trás deles nesse documento. Nesta dissertação, Roy primeiro define uma metodologia de falar sobre estilos arquiteturais — alto nível, padrões de abstração que expressam as principais ídeias por trás de uma abordagem arquitetural. Cada estilo arquitetural com um conjunto de regras que o define. Exemplos de estilos arquiteturais incluem “o estilo nulo” (que não possue regras), pipe e filter, cliente/servidor, objetos distrubuídos e REST.
  
  Se tudo isso soa um pouco abstrato pra você. Você está certo - REST em si é um estilo de alto nível que poderá ser implementado utilizando muitas tecnologias diferentes, e instanciado utilizando diferentes valores para suas propriedades abstratas.
  
  Uma roupagem do estilo REST é o HTTP, ou de forma um pouco mais abstrata: a arquitetura da Web em si. Pensando dessa forma, o HTTP "instancia" a interface uniforme do REST com uma interface especial, consistindo nos verbos HTTP.

  Comumente, REST é conhecido como um conjunto de princípios que definem como Web Standards, como HTTP e URIs, devem ser usados. A promessa é que se você aderir a princípios REST enquanto estiver desenhando sua aplicação, você terá um sistema que explora a arquitetura da Web em seu benefício. 
  
  Os cinco princípios fundamentais são os seguintes:
  
  1. Dê a todas as coisas um Identificador
  
      Use URIs para identificar tudo o que precisar ser identificado, especifique todos os recursos de "alto nível" que seu aplicativo oferece, se eles representam itens individuais, conjuntos de itens, objetos virtuais e físicos, ou resultados de computação.
  
  2. Vincule as coisas
  
      Use liks para referênciar coisas que possam ser identificadas (recursos) sempre que for possível. Hiperlinks são o que fazem a Web ser a Web.
      
  3. Utilize métodos padronizados
  
      Para que clientes possam interagir com seus recursos, eles devem implementar o protocolo de aplicação padrão (HTTP) corretamente, isto é, utilizar os métodos padrão: GET, PUT, POST e DELETE.
  
  4. Recursos com múltiplas representações
  
      Ofereça diversos formatos dos recursos para diferentes necessidades.
  
  5. Comunique sem estado
  
      Em outras palavras, um servidor não deveria guardar o estado da comunicação de qualquer um dos clientes que se comunique com ele além de uma única requisição. A razão mais óbvia para isso é escalabilidade - o número de clientes que podem interagir com o servidor seria consideravelmente impactado se fosse preciso manter o estado do cliente.

  Um exemplo simples de api, é a API pública do [Pokeapi](https://pokeapi.co/), que é uma API pública para consumir dados de pokemons.
  
O que é Mock?
-------------

Durante o desenvolvimento frequentemente é necessário consumir uma API REST, porém, diversas vezes as APIs ainda não estão desenvolvidas. Consequentemente, para que o desenvolvimento frontend não pare, precisamos ter APIs "falsas" que simulam o comportamento das APIs. Essas APIs falsas são conhecidas como Mocks. 

Angular
=======
  
Componentes
-----------
   
  Agora voltando para as aplicações Angular, elas são feitas a partir de um conjunto de web components. Um web componente é a combinação de estilo CSS + template HTML + classe javascript que irá dizer ao Angular como controlar uma parte da aplicação.
  
  Além de componentes, no Angular possuímos uma série de bibliotecas (Classes) que resolvem cada uma um problema específico.
  
  Um pequeno exemplo de um componente:
  
  ``` typescript
  import {Component} from '@angular/core'
  @Component({
    selector: 'my-app',
    template: '<h1>Hello World!</h1>'
  })
  export class AppComponent {
    name = 'MATERA'
  }
  ```
  
  Analisando o código acima, percebemos alguns pontos importantes. Primeiro, nós temos a importação da classe Component do núcleo do Angular, o que nos permite criar componentes utilizando o decorador @Component.
  
  Decoradores de componentes sempre vem escrito acima da declaração da classe do seu componente e servem para “dizer” ao Angular como este componente deve trabalhar, alguns decoradores são:
  
  * **Selector**: Irá informar ao Angular qual nome deverá utilizar na tag HTML
  * **Template**: Irá informar ao Angular qual o template de View que irá utilizar, podendo importar um arquivo .html ou usando o template no próprio arquivo TypeScript, utilizando templates literais com `<div></div>`, interpolando as variáveis da mesmo forma que faria no arquivo HTML, com {{variavel}}
  
  Para o Angular, assim como o falecido AngularJS, é muito importante a importação dos módulos e componentes que você irá fazer uso. Como convenção, você tem os arquivos main.ts, app.module.ts e o app.routes.ts, dividindo a responsabilidade da sua aplicação.
  
  O objetivo do app.module é basicamente importar todos os recursos que a aplicação irá utilizar e defini-las em um módulo – onde possamos fazer o bootstrap – ou inicialização da nossa aplicação. Essa inicialização é feita pelo main.ts, que é o core da aplicação chamado no index.html.
  
Diretivas
---------

  O Angular também possui um recurso “mágico” para utilizar na camada de View, que são as Diretivas, que são atributos HTML especiais que aceitam um certo grau de lógica de programação na camada do template.
  
  Alguns exemplos são:
  
  * ***ngIf**: Remove ou adiciona um componente com base em uma expressão booleana:
  
    ```<section *ngIf="showSection==true"></section>```
    
  * ***ngFor**: Percorre um laço de repetição fazendo o bind (ligação) do conteúdo dentro da tag que carregar a diretiva:
  
    ```<li *ngFor="let item of list"></li>```
    
  * **[ngClass]**: Faz o bind (ligação) de classe no html, a chave do objeto representa o nome da classe a ser aplicada, o valor do objeto representa a condição ou expressão:
  
    ```<div [ngClass]="{'is-active': pagina == 'home'}"></div>```
    
  * **[(ngModel)]**: O famoso *two-way data-binding*, ou ligação de dados em duas vias, além de controle de validação dos formulários:
  
    ```<input [(ngModel)]="userName">```
    
Services
--------

  Services são basicamente classes _Singleton_, que é um padrão de software (do inglês _Design Pattern_), garantindo a instância única de uma classe, para assim ter um ponto global de acesso ao objeto. 
  
  Basicamente, o service serve para “guardar a lógica do negócio”, consumindo os end-points da API e retornando ou enviando os dados de acordo com a requisição vinda do componente.
  
  Para criar um serviço no Angular, basta criar uma Classe e decorá-la com o decorador "@Injectable()", como por exemplo:
  
``` typescript
@Injectable()
export class MyService() {}
```
  
A injeção de Service dentro do Componente é feito por meio de importação e pela aplicação do Service no construtor:
``` typescript
import {MyService} from '../../providers/myservice.service'

constructor(private service: MyService){}
```
   
Arquitetura
-----------

  Entendendo o que seja o Angular e como ele se relaciona com os componentes, diretivas e services, podemos passar a pensar na sua Arquitetura:
  
  ![Arquitetura](https://angular.io/generated/images/guide/architecture/overview2.png)
  
  No Angular tudo é centrado no Component. Conforme você pode analisar mais ao centro do diagrama o componente angular é definido por meio de um Metadata​, que nada mais é que aquele objeto {} definido dentro do decorador @Component​. Este mesmo componente possui um Template​ e a comunicação de dados entre a parte lógica do Componente e o Template é realizada por meio de Property Bindings, ou Ligação por meio de propriedades.
   
Hands-on
=======

Node
----
  
  Em linhas gerais o node.js é uma plataforma escrita em javascript feita para rodar código javascript. Em uma simples analogia, o Node.js seria a soma do PHP+Apache. é importante frisar que o Node.js roda código javascript apenas no lado do servidor.
  Utilizaremos o node aqui não para criar API's ou renderizar HTML no lado do servidor. Iremos utilizar o node como ferramenta principal para desenvolvimento. Por meio dele vamos instalar a linha de comando do angular e executar nossa aplicação localmente.
  
  [Link para download](https://nodejs.org/en/download/)
  
##### Verificando a versão do Node (v8.9.4)
  ```node -v```

NPM
---
  
  NPM vem de Node Package Manager ou gerenciador de pacotes do Node. O NPM é distribuído juntamente com a plataforma do node e é por meio dele que iremos instalar todas nossas dependências de desenvolvimento e bibliotecas.
  
##### Instalando a versão do NPM
  ```npm install npm@latest -g```
  
  ```npm install npm@5.5.1 -g```
  
##### Verificando a versão do NPM
  ```npm -v```
  
NVM
---

  NVM vem de Node Version Manager ou gerenciador de versões do Node.
  
##### Verificando a versão do NVM
  ```nvm --version```
  
##### Instalando ou atualizando Node
  ```nvm install node```
  
Angular CLI
-----------
  
  Uma vez instalado o Node/NPM, precisamos instalar a interface de linha de comando do Angular. Agora sim vamos começar de fato a trabalhar com node, pelo gerenciador de pacotes npm.
  
[Documentação](https://github.com/angular/angular-cli)

##### Instalando Angular CLI
```npm i -g @angular/cli@latest```

```npm i -g @angular/cli@1.6.3```

##### Link com última versão
```npm link @angular/cli```

Primeiro Projeto
----------------

  Para criar um projeto Angular, utilizando do Angular CLI.
  
##### Criando o projeto
```ng new euvim --style=scss```

##### Incluindo Angular
```
npm install --save @angular/material
npm install --save @angular/cdk
npm install --save @angular/animations
npm install --save hammerjs
npm install --save-dev @angular-devkit/core
```

##### Executando o projeto
```ng serve```

##### No arquivo index.html

```<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">```

```typescript
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Euvim</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

##### No arquivo src/main.js
```import 'hammerjs';```

``` typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
```

##### No arquivo style.scss
``` css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

body{
    margin:0px;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
 }
```

##### No arquivo app.module.ts
``` typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
BrowserAnimationsModule
```

``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Utilizando Componente
---------------------

[Componentes Angular Material](https://material.angular.io/components/categories)

##### No arquivo app.component.html
``` typescript
  <form class="example-form">
    <mat-form-field class="example-full-width">
      <input matInput placeholder="Favorite food" value="Sushi">
    </mat-form-field>
  
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Leave a comment"></textarea>
    </mat-form-field>
  </form>
```

``` typescript
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>

<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Favorite food" value="Sushi">
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <textarea matInput placeholder="Leave a comment"></textarea>
  </mat-form-field>
 </form>
```

##### No arquivo app.module.ts
``` typescript
import { MatInputModule } from '@angular/material/input';
MatInputModule
```

``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
