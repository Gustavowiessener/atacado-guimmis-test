
const el = require('../../elements/Menu/elements').ELEMENTS


class Menu {

acessarTelaInicial() {
    cy.visit("https://atacado.guimmis.com.br/apps/e-commerce/products");
}

acessarToggleMenu(){
    cy.get(el.menu).click();
    cy.get(el.containerToggleMenu)
            .should('to.be.visible')
}

validaResponsiveTela(telas) {
    cy.viewport(telas)
    cy.get(el.containerToggleMenu)
    .should('to.be.visible')
}

validaInformacoesRetornoMenu(catalogo, piso ){
    cy.get(el.containerAcessoToggle)
    .should('contain', catalogo)
        .should('contain', piso)
        .should('not.be.empty')
}

}

export default new Menu();