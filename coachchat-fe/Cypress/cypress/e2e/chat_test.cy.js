describe('Deep Chat Interaction Test', () => {
  it('successfully sends a message and receives a reply', () => {
      cy.visit('http://localhost:3000');

      cy.get('.deep-chat').should('be.visible');
      
      cy.get('.deep-chat').within(() => {
          cy.get('input[type="text"]')
            .type('Hello, how are you?{enter}');
      });
      cy.get('.deep-chat').within(() => {
          cy.get('input[type="text"]').should('have.value', '');
      });
  });
});
