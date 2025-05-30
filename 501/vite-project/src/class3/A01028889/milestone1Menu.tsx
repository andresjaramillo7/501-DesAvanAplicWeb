import { useState } from "react";
import Button from "./button";

import Class1 from "../../class1/A01028889/class1";
import Class2 from "../../class2/A01028889/class2";
import Class3 from "./class3";

import "./Styles/menu.css";

function Milestone1Menu() {
  const [selectedClass, setSelectedClass] = useState('');

  if (selectedClass === 'class1') return <Class1 />;
  if (selectedClass === 'class2') return <Class2 />;
  if (selectedClass === 'class3') return <Class3 />;

  return (
    <div className="menu-container">
      <h1 className="menu-title">Milestone 1</h1>
      <ul className="menu-list">
        <li>
          <Button label="Go Class 1" onClick={() => setSelectedClass('class1')} />
        </li>
        <li>
          <Button label="Go Class 2" onClick={() => setSelectedClass('class2')} />
        </li>
        <li>
          <Button label="Go Class 3" onClick={() => setSelectedClass('class3')} />
        </li>
      </ul>
      <a href="/src/A01028889/home.html" className="class1-button-link">
        Go to A01028889's Milestones Menu
      </a>
    </div>
  );
}

export default Milestone1Menu;
