#language: pt
Funcionalidade: Produto

Esquema do Cenário: Como usuario desejo acessar o campo de produtos, e quando filtrar pelo <item> desejado, desejo ter acesso á todas informações, dentre elas: <linha> <sku> <peso>.
Dado Que acesse o campo de pesquisa
Quando Informar no campo referente ao item "<item>"
Então Devo receber a informação como "<linha>" com numero do SKU "<sku>" e com peso "<peso>"

Exemplos:
    | item   | linha         | sku            | peso   |    
    | 9122x  | Linha Gold    | 7897473137233  | 6Kg    |
    | 7848D  | Linha Gold    | 7897473136687  | 5Kg    |  
    | 888l   | Linha Premium | 7897473138162  | 11Kg   | 
    | 7843U  | Linha Diamond | 7897473141599  | 12Kg   |
    | 7742   | Linha Gold    | 7897473136670  | 8Kg    |
    | 162x   | Linha Premium | 7897473137257  | 7Kg    |
    | 5040   | Linha Gold    | 7897473139817  | 6Kg    |
    | 9122ES | Linha Gold    | 7897473138322  | 4Kg    |
    | 6544   | Linha Gold    | 7897473136649  | 7Kg    |
