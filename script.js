describe('example to-do app', () => {
    it('drag & drop works correctly', () => {
        cy.visit('http://localhost:3000'); // Update with actual URL

        // Select the first `.items` element and perform drag-and-drop
        cy.get('.items').first()
            .trigger('mousedown', { which: 1 }) // Start dragging
            .trigger('mousemove', { clientX: 300, clientY: 300 }) // Move item
            .trigger('mouseup'); // Drop item

        // Ensure that the position of the first `.items` element has changed
        cy.get('.items').first().should('have.css', 'left');
    });
});
