import { useState } from "react";
import Button from "../class2/A01028889/button";
import Milestone1Menu from "../class3/A01028889/milestone1Menu";
import Milestone2Menu from "../class6/A01028889/milestone2Menu";

import "../class3/A01028889/Styles/menu.css";

function Menu() {
  const [selectedClass, setSelectedClass] = useState('');

  if (selectedClass === 'milestone1') return <Milestone1Menu />;
  if (selectedClass === 'milestone2') return <Milestone2Menu />;

  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>
      <ul className="menu-list">
        <li>
          <Button label="Go To Milestone 1" onClick={() => setSelectedClass('milestone1')} />
        </li>
        <li>
          <Button label="Go To Milestone 2" onClick={() => setSelectedClass('milestone2')} />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
