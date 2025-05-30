import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import InputField from '../../class3/A01028889/inputField';
import Button from '../../class3/A01028889/button';
import './Styles/TravelRequestForm.css';
const TravelRequestForm = () => {
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [purpose, setPurpose] = useState('');
    const handleSubmit = () => {
        console.log('Travel Request:', { destination, startDate, endDate, purpose });
    };
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Travel Request Form" }), _jsx(InputField, { type: "text", placeholder: "Destination", value: destination, onChange: handleInputChange(setDestination) }), _jsx(InputField, { type: "date", placeholder: "Start Date", value: startDate, onChange: handleInputChange(setStartDate) }), _jsx(InputField, { type: "date", placeholder: "End Date", value: endDate, onChange: handleInputChange(setEndDate) }), _jsx("textarea", { placeholder: "Purpose", value: purpose, onChange: handleInputChange(setPurpose), className: "p-2 border rounded w-full" }), _jsx(Button, { label: "Submit", onClick: handleSubmit })] }));
};
export default TravelRequestForm;
