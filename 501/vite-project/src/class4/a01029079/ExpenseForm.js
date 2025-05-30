import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import InputField from '../../class2/a01029079/components/input';
import Button from '../../class2/a01029079/components/button';
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
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Expense Form" }), _jsx(InputField, { type: "number", placeholder: "Amount", value: amount, onChange: handleInputChange(setAmount) }), _jsx(InputField, { type: "text", placeholder: "Category", value: category, onChange: handleInputChange(setCategory) }), _jsx("textarea", { placeholder: "Description", value: description, onChange: handleInputChange(setDescription), className: "p-2 border rounded w-full" }), _jsx(Button, { text: "Submit", onClick: handleSubmit })] }));
};
export default ExpenseForm;
