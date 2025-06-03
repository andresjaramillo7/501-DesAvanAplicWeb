import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/menuMilestones';

const root = ReactDOM.createRoot(document.getElementById('menu')!);
root.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);
