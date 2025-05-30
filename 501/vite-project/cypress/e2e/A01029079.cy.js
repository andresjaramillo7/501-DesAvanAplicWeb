describe('Advanced Counter Page (DOM)', () => {
  beforeEach(() => {
    cy.visit('/src/class3/a01029079/public/class3.html')
  })

  it('al hacer click en Increment el primer historial es "#1: 1"', () => {
    cy.contains('button', 'Increment').click()
    cy.get('.history-list .history-item')
      .first()
      .should('have.text', '#1: 1')
  })

  it('luego, al hacer click en Decrement, el segundo historial es "#2: 0"', () => {
    cy.contains('button', 'Increment').click()
    cy.contains('button', 'Decrement').click()
    cy.get('.history-list .history-item')
      .eq(1)
      .should('have.text', '#2: 0')
  })

  it('al hacer click en Reset añade un historial con "#1: 0"', () => {
    cy.contains('button', 'Reset').click()
    cy.get('.history-list .history-item')
      .should('have.length', 1)
      .first()
      .should('have.text', '#1: 0')
  })

  it('al hacer click en Clear History elimina todo el historial', () => {
    cy.contains('button', 'Increment').click()
    cy.contains('button', 'Increment').click()
    cy.contains('button', 'Clear History').click()
    cy.get('.history-list .history-item').should('have.length', 0)
    cy.contains('No hay historial.').should('be.visible')
  })
})
