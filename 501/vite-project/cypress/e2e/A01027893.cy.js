describe('Login Page', () => {
    it('should log in with valid credentials', () => {
        cy.visit('/http://localhost:5173/src/class9/a01029079/public/class9.html');
        cy.get('input[placeholder="Email"]').type('admin');
        cy.get('input[placeholder="Contraseña"]').type('admin');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
    });
});
  