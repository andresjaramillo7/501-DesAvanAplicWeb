import React, { useState, ChangeEvent } from 'react';
import InputField from '../../class3/A01028889/inputField';
import Button from '../../class3/A01028889/button';

const ExpenseForm: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (): void => {
    console.log('Expense:', { amount, category, description });
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setter(e.target.value);
    };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Form</h1>
      <InputField
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleInputChange(setAmount)}
      />
      <InputField
        type="text"
        placeholder="Category"
        value={category}
        onChange={handleInputChange(setCategory)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleInputChange(setDescription)}
        className="p-2 border rounded w-full"
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default ExpenseForm;
