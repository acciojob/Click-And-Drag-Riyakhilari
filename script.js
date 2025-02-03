describe('example to-do app', () => {
    it('drag & drop works correctly', () => {
        cy.visit('http://localhost:3000'); // Update with actual URL

        // Select first `.items` and store in alias
        cy.get('.items').first().as('dragItem');

        // Drag and drop with Cypress-friendly attributes
        cy.get('@dragItem')
            .trigger('mousedown', { which: 1, force: true })
            .trigger('mousemove', { clientX: 300, clientY: 300, force: true })
            .trigger('mouseup', { force: true });

        // Ensure the item moved
        cy.get('@dragItem').should('have.css', 'left');
    });
});
