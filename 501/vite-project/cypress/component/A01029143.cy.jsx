import AdvancedCounter from '../../src/class3/a01029079/components/counter';
import { mount } from 'cypress/react';
import React from 'react';

describe('<AdvancedCounter />', () => {
  it('muestra contador en 0 al inicio y "No hay historial."', () => {
    cy.mount(<AdvancedCounter />);
    cy.contains('Count: 0');
    cy.contains('No hay historial.');
  });

  it('incrementa y guarda historial correctamente', () => {
    cy.mount(<AdvancedCounter />);
    cy.get('button').contains('Increment').click();
    cy.contains('Count: 1');
    cy.contains('#1: 1');

    cy.get('button').contains('Increment').click();
    cy.contains('Count: 2');
    cy.contains('#2: 2');
  });

  it('decrementa y guarda historial correctamente', () => {
    cy.mount(<AdvancedCounter />);
    cy.get('button').contains('Decrement').click();
    cy.contains('Count: -1');
    cy.contains('#1: -1');
  });

  it('reinicia el contador y agrega 0 al historial', () => {
    cy.mount(<AdvancedCounter />);
    cy.get('button').contains('Increment').click();
    cy.get('button').contains('Reset').click();
    cy.contains('Count: 0');
    cy.contains('#2: 0');
  });

  it('borra el historial sin cambiar el contador', () => {
    cy.mount(<AdvancedCounter />);
    cy.get('button').contains('Increment').click();
    cy.get('button').contains('Clear History').click();
    cy.contains('Count: 1');
    cy.contains('No hay historial.');
  });
});
