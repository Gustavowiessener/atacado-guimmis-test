
import Menu from '../../support/pages/actions/Menu'

Given(/^Que estou na tela principal$/, () => {
	Menu.acessarTelaInicial()
});

When(/^Acesso o menu na parte lateral$/, () => {
    Menu.acessarToggleMenu()
});


When(/^acesso em diferentes "([^"]*)"$/, (telas) => {
	Menu.validaResponsiveTela(telas)    
    
});


Then(/^Devo receber como acesso no menu com dados de retorno como "([^"]*)" e "([^"]*)".$/, (catalogo,piso) => {
    Menu.validaInformacoesRetornoMenu(catalogo,piso)

});


