import { useState } from "react";



import "./Styles/menu.css";

function Milestone2Menu() {
  const [selectedClass, setSelectedClass] = useState('');

  return (
    <div className="menu-container">
      <h1 className="menu-title">Milestone 2</h1>
      <ul className="menu-list">
        <li>Aqui van las clases</li>
      </ul>
      <a href="/src/A01028889/home.html" className="class1-button-link">
        Go to A01028889's Milestones Menu
      </a>
    </div>
  );
}

export default Milestone2Menu;
