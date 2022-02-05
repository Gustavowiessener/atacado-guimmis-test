<h2> Teste - Nova Feature: Produto</h2>
<hr>

<span> Para rodar os arquivos e o projeto em seu ambiente, instale as dependencias: </span>

[x] - Cypress 9.4.1 </br>
[x] - Cypress Cucumber Preprocessor 4.3.1

<br>

<span>Na raiz do projeto, através de seu Prompt de Commando/Terminal/Console execute o seguinte comando:</span>
<ul>
    <li> yarn install
    <li> yarn run cypress open - <b>abrir ambiente cypress</b>
    <li> yarn run cypress run - <b>gerenciar os testes em handless</b>

</ul>
<hr>

<h3> Cenários iniciais: </h3>

<b>Esquema do Cenário:</b> Acessar o campo de pesquisa e receber todas as informações referente ao produto: linha, sku, peso. Os valores não podem retornar vazios, e devem seguir os mesmos padrões de desenvolvimento.

<b>Dado</b> Que acesse o campo de pesquisa <br>
<b>Quando</b> Informar no campo valores referente ao "item" <br>
<b>Então</b> Devo receber as informações como "linha", numero do "sku" e informações do "peso" do item.

