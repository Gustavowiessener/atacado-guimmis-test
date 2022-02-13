
Given(/^Que estou na tela principal$/, () => {
	cy.visit("https://atacado.guimmis.com.br/apps/e-commerce/products");
});

When(/^Acesso o menu na parte lateral$/, () => {
	cy.get('.MuiIconButton-label-160').click();
    cy.get('.MuiDrawer-paper-143 > .overflow-hidden')
            .should('to.be.visible')
});


When(/^acesso em diferentes "([^"]*)"$/, (telas) => {
	cy.viewport(telas)
    cy.get('.MuiDrawer-paper-143 > .overflow-hidden')
    .should('to.be.visible')
     
    
});


Then(/^Devo receber como acesso no menu com dados de retorno como "([^"]*)" e "([^"]*)".$/, (catalogo,piso) => {
     cy.get('.MuiList-root-258')
        .should('contain', catalogo)
            .should('contain', piso)
    
});


