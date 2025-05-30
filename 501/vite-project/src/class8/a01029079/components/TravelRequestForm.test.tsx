import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TravelRequestForm from './TravelRequestForm';

test('renders the travel request form', () => {
  const { getByPlaceholderText } = render(<TravelRequestForm />);
  expect(getByPlaceholderText('Destination'));
  expect(getByPlaceholderText('Start Date'));
  expect(getByPlaceholderText('End Date'));
  expect(getByPlaceholderText('Purpose'));
});

test('displays validation errors if the form is submitted with invalid data', async () => {
  const { getByText, findByText } = render(<TravelRequestForm />);
  fireEvent.click(getByText('Submit'));

  // Usa findByText para esperar errores async
  expect(await findByText('Destination is required'));
  expect(await findByText('Start date is required'));
  expect(await findByText('End date is required'));
  expect(await findByText('Purpose is required'));
});
