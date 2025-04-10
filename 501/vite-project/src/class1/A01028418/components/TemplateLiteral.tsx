import React from 'react';

const userName = "Luis";
const city = "Ciudad de México";

export const TemplateLiteral: React.FC = () => {
    const message = `Hola, ${userName}. ¡Bienvenido a ${city}!`; // Template Literal
    return (
        <div className="card">
            <h2>Template Literals</h2>
            <p>{message}</p>
        </div>
    );
};

