import React from 'react';
import { Destructuring } from './components/Destructuring';
import { SpreadOperator } from './components/SpreadOperator';
import { TemplateLiteral } from './components/TemplateLiteral';
import { Map } from './components/Map';
import { ArrowFunction } from './components/ArrowFunctions';

export const Class1: React.FC = () => {
  return (
    <div className="main-container">
      <h1>Demostración Creativa de ES6+</h1>
      <DestructuringCard />
      <SpreadOperatorCard />
      <TemplateLiteralCard />
      <MapCard />
      <ArrowFunctionCard />
    </div>
  );
};

