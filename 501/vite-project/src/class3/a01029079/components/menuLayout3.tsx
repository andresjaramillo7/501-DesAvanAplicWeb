// src/components/Menu.tsx
import React from 'react';

const Menu2: React.FC = () => {

  return (
    <div className="menu-container">
      <h1 className='menu-title'> A01029079 - A01028889 - A01027893 - A01029143</h1>
      <h2 className="menu-title">Menú Milestone 3</h2>
      <div className="menu-buttons">
        <a href="../../../../../src/class7/a01029079/public/class7.html" className="btn"> Class 7 </a>
        <a href="../../../../../src/class8/a01029079/public/class8.html" className="btn"> Class 8 </a>
        <a href="../../../../../src/class9/a01029079/public/class9.html" className="btn"> Class 9 </a>
        <a href="../../../../../src/class3/a01029079/public/menuMilestones.html" className="btn"> Return </a>
      </div>
    </div>
  );
};

export default Menu2;