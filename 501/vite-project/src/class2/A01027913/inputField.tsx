import React from "react";

interface inputs {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FieldInput: React.FC<inputs> = ({type, placeholder, value,onChange}) => {
    return (
        <input 
        type={type} placeholder={placeholder} value={value} onChange={onChange}
        style={{padding: '10px 20px', backgroundColor:'green', margin: '5px' }}
        />
    );
};

export default FieldInput