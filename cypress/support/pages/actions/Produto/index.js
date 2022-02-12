const el = require('../../elements/Produto/elements').ELEMENTS;


class Produto {

visitProduto() {
     cy.visit("https://atacado.guimmis.com.br/apps/e-commerce/products")
	cy.get(el.pesquisa).as('pesquisa')
}

acessarCampo(item) {
       cy.get('@pesquisa')
		.click({force: true})
			.type(`${item}{enter}`)
}

validarInformacoes(linha, sku, peso) {
      cy.get(el.linha).as('linha')
	cy.get(el.sku).as('sku')
	cy.get(el.peso).as('peso')

	cy.get('@linha')
			.should('have.text', linha)
                  .should('to.be.not.null')
	
	cy.get('@sku')
			.should('contain', sku)
                  .should('to.be.not.null')

	cy.get('@peso')
			.should('have.text', peso)
                  .should('to.be.not.null')
}

}

export default new Produto();