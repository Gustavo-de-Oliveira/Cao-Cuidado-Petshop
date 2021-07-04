/* eslint-disable no-plusplus */
/// <reference types="cypress" />

describe('/cart.js', () => {
  it('add correctly itens on cart', () => {
    // vai pra home
    cy.visit('/');
    // clica no item especifico
    cy.get(
      '#horizontalProductsList a[href="/itens/racao-royal-canin-medio-5kg"]'
    ).click();
    // verifica se foi pra pagina certa
    cy.url().should('include', '/itens/racao-royal-canin-medio-5kg');
    // clica 4 vezes no botao '+'
    for (let n = 0; n < 3; n++) {
      cy.get('#increase_button').click();
    }
    // clica no botao 'adicionar ao carrinho'
    cy.get('button[id="addToCartBtn"]').click();
    // clica no botao 'carrinho' no header
    cy.get('nav a[href="/cart"]').click();
    // verifica se foi pra pagina certa
    cy.url().should('include', '/cart');
    // verifica se o valor 'total' ficou com a soma correta
    cy.get('#finalPriceContainer h4').should('have.text', 'R$ 169.86');
  });
});
