import MusicList from '../../src/class1/a01029079/components/musicList';
import { mount } from 'cypress/react';
import React from 'react';
import { songs } from '../../src/class1/a01029079/data'

describe('MusicList component', () => {
  it('renders a list of music items', () => {
    const onSelectSong = cy.stub(); // mock de función

    mount(<MusicList onSelectSong={onSelectSong} />);

    // Verificamos que el número de elementos renderizados sea igual a la cantidad de canciones
    cy.get('li').should('have.length', songs.length);
  });

  it('calls onSelectSong when a music item is clicked', () => {
    const onSelectSong = cy.stub();

    mount(<MusicList onSelectSong={onSelectSong} />);

    // Simulamos click en el primer item
    cy.get('li').first().click().then(() => {
      // Verificamos que se haya llamado el stub con el objeto song correcto
      expect(onSelectSong).to.have.been.calledOnceWith(songs[0]);
    });
  });
});