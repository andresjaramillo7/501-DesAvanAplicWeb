import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import InputField from '../../class2/a01029079/components/input';
import Button from '../../class2/a01029079/components/button';
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
    return (_jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "class-container", children: [_jsx("h1", { className: "class-title", children: "Class 4" }), _jsx("p", { className: "class-description", children: "Advanced React Patterns." }), _jsx("a", { href: "../../../../../src/class3/a01029079/public/menu2.html", className: "class-button-link", children: "Go to Menu" })] }), _jsx("h1", { className: "text-2xl font-bold mb-4", children: "Travel Request Form" }), _jsx(InputField, { type: "text", placeholder: "Destination", value: destination, onChange: handleInputChange(setDestination) }), _jsx(InputField, { type: "date", placeholder: "Start Date", value: startDate, onChange: handleInputChange(setStartDate) }), _jsx(InputField, { type: "date", placeholder: "End Date", value: endDate, onChange: handleInputChange(setEndDate) }), _jsx("textarea", { placeholder: "Purpose", value: purpose, onChange: handleInputChange(setPurpose), className: "p-2 border rounded w-full" }), _jsx(Button, { text: "Submit", onClick: handleSubmit })] }));
};
export default TravelRequestForm;
