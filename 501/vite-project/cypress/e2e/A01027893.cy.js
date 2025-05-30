describe('Login Page', () => {
    it('should log in with valid credentials', () => {
        cy.visit('/src/class9/a01029079/public/class9.html');
        cy.get('input[placeholder="Email"]').type('admin');
        cy.get('input[placeholder="Contraseña"]').type('admin');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
    });

    it('should display an error message with invalid credentials', () => {
        cy.visit('/src/class9/a01029079/public/class9.html');
        cy.get('input[placeholder="Email"]').type('wronguser');
        cy.get('input[placeholder="Contraseña"]').type('wrongpass');
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('contain', 'Correo o contraseña inválidos');
      });
});
  