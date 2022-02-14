<h2> Teste - Nova Feature: Produto e Menu</h2>
<hr>

<span> Para rodar os arquivos e o projeto em seu ambiente, instale as dependencias: </span>

<ul> <li>[X] Cypress 9.4.1 </li>
<li>[x] Cypress Cucumber Preprocessor 4.3.1 </li>

</ul>
<hr>

<br>

<span>Na raiz do projeto, através de seu Prompt de Commando/Terminal/Console execute o seguinte comando:</span>
<ul>
    <li> yarn install
    <li> yarn run cypress open - <b>abrir ambiente cypress</b>
    <li> yarn run cypress run - <b>gerenciar os testes em handless</b>

</ul>
<hr>

<h3> Cenários iniciais: </h3>

<b>Funcionalidade: Produto</b><br>
<b>Esquema do Cenário:</b> Como usuario desejo acessar o campo de produtos, e quando filtrar pelo "item" desejado, desejo ter acesso á todas informações, dentre elas: "linha" "sku" "peso".

<b>Dado</b> Que acesse o campo de pesquisa <br>
<b>Quando</b> Informar no campo valores referente ao "item" <br>
<b>Então</b> Devo receber as informações como "linha", numero do "sku" e informações do "peso" do item.

<hr>
<b>Funcionalidade: Menu</b><br>
<b>Esquema do Cenário:</b> Como usuario quero acessar o menu em diferentes telas, dispositivo: "telas",  acessando o campo de catalogo completo, e também o de piso vinilico.

<b>Dado</b> Que estou na tela principal
<b>Quando </b>Acesso o menu na parte lateral
<b>E</b> acesso em diferentes "telas"
<b>Então</b>Devo receber como acesso no menu com dados de retorno como "catalogo" e "piso".


