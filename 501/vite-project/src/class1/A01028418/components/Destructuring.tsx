import React from 'react'

const person = {name: Luis, age: 20 , hobby: "Skating" };
const { name, age, hobby } = person;

export const Destructuring: React.FC = () => {
  return(
    <div className="card">
      <h2>Destructuración</h2>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>  
  );
};
