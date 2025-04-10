import React from 'react';
const baseData = { name: "Luis", age: 20 };
const extendedData = { ...baseData, city: "Cuidad de México", country: "México"};

export const SpreadOperato: React.FC = () => {
    return (
        <div className="card">
            <h2>Operador Spread</h2>
            <p>Nombre: {extendedData.name}</p>
            <p>Edad: {extendedData.age}</p>
            <p>Ciudad: {extendedData.city}</p>
            <p>País: {extendedData.country}</p>
        </div>
    );
};
