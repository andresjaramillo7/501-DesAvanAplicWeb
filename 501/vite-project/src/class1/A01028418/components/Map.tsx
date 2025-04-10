import React, { useState } from 'react';

// Colores iniciales
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];
const items = ["React", "TypeScript", "JavaScript", "CSS", "HTML"];

export const MapCard: React.FC = () => {
    const [colorList, setColorList] = useState(colors);

    // Cambiar el color de un ítem al azar
    const changeColor = (index: number) => {
        const newColor = prompt("Elige un color (en formato HEX, ej: #FF5733):") || colorList[index];
        setColorList(colorList.map((color, i) => (i === index ? newColor : color)));
    };

    return (
        <div className="card">
            <h2>Paleta de Colores Interactiva</h2>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => changeColor(index)}
                        style={{ color: colorList[index], cursor: "pointer" }}
                    >
                        {item} <span className="edit-hint">(Haz clic para cambiar el color)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

