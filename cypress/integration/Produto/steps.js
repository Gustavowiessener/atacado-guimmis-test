import Produto from '../../support/pages/actions/Produto/'

Given(/^Que acesse o campo de pesquisa$/, () => {
	Produto.visitProduto();
});

When(/^Informar no campo referente ao item "([^"]*)"$/, (item) => {
	Produto.acessarCampo(item);
});

Then(/^Devo receber a informação como "([^"]*)" com numero do SKU "([^"]*)" e com peso "([^"]*)"$/, (linha,sku,peso) => {
	Produto.validarInformacoes(linha, sku, peso)
	
});


