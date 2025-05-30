import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TravelRequestForm from './TravelRequestForm';
test('renders the travel request form', () => {
    const { getByPlaceholderText } = render(_jsx(TravelRequestForm, {}));
    expect(getByPlaceholderText('Destination')).toBeInTheDocument();
    expect(getByPlaceholderText('Start Date')).toBeInTheDocument();
    expect(getByPlaceholderText('End Date')).toBeInTheDocument();
    expect(getByPlaceholderText('Purpose')).toBeInTheDocument();
});
test('displays validation errors if the form is submitted with invalid data', async () => {
    const { getByText, findByText } = render(_jsx(TravelRequestForm, {}));
    fireEvent.click(getByText('Submit'));
    // Usa findByText para esperar errores async
    expect(await findByText('Destination is required')).toBeInTheDocument();
    expect(await findByText('Start date is required')).toBeInTheDocument();
    expect(await findByText('End date is required')).toBeInTheDocument();
    expect(await findByText('Purpose is required')).toBeInTheDocument();
});
