import React, { useState } from 'react';

export const ArrowFunctionCard: React.FC = () => {
    // Estado para manejar el tamaño y el color del cuadro
    const [size, setSize] = useState(100);
    const [color, setColor] = useState("#FF5733");

    // Cambiar el tamaño del cuadro con una función flecha
    const changeSize = () => setSize(size + 20);

    // Cambiar el color del cuadro con una función flecha
    const changeColor = () => setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h2>Cuadro Interactivo</h2>
            <div
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                    margin: "20px auto",
                    transition: "all 0.3s ease",
                }}
            ></div>
            <button onClick={changeSize} style={{ marginRight: "10px" }}>
                Cambiar Tamaño
            </button>
            <button onClick={changeColor}>
                Cambiar Color
            </button>
        </div>
    );
};

