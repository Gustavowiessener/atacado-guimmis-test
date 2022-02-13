#language: pt

Funcionalidade: Menu

Esquema do Cenário: Como usuario quero acessar o menu em diferentes telas, dispositivo: <telas>,  acessando o campo de catalogo completo, e também o de piso vinilico.
Dado Que estou na tela principal
Quando Acesso o menu na parte lateral
E acesso em diferentes "<telas>"
Então Devo receber como acesso no menu com dados de retorno como "<catalogo>" e "<piso>".

Exemplos:

| telas      | catalogo          | piso          | 
| iphone-5   | Catálogo Completo | Piso Vinílico |
| iphone-6   | Catálogo Completo | Piso Vinílico |
| ipad-2     | Catálogo Completo | Piso Vinílico |
| iphone-xr  | Catálogo Completo | Piso Vinílico |
| macbook-11 | Catálogo Completo | Piso Vinílico |
| macbook-15 | Catálogo Completo | Piso Vinílico |
