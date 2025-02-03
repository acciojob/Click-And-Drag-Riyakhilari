describe('example to-do app', () => {
    it('drag & drop works correctly', () => {
        cy.visit('http://localhost:3000'); // Update with actual URL

        // Select first `.items` and perform drag & drop
        cy.get('.items').first()
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 300, clientY: 300 })
            .trigger('mouseup');

        // Ensure the position of the first item changed
        cy.get('.items').first().should('have.css', 'left');
    });
});
