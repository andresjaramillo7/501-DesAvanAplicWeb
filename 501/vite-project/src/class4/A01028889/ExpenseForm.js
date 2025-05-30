import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import InputField from '../../class3/A01028889/inputField';
import Button from '../../class3/A01028889/button';
const ExpenseForm = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = () => {
        console.log('Expense:', { amount, category, description });
    };
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Expense Form" }), _jsx(InputField, { type: "number", placeholder: "Amount", value: amount, onChange: handleInputChange(setAmount) }), _jsx(InputField, { type: "text", placeholder: "Category", value: category, onChange: handleInputChange(setCategory) }), _jsx("textarea", { placeholder: "Description", value: description, onChange: handleInputChange(setDescription), className: "p-2 border rounded w-full" }), _jsx(Button, { label: "Submit", onClick: handleSubmit })] }));
};
export default ExpenseForm;
