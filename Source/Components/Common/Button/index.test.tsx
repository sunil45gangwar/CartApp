import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './index'; // Update the import path accordingly

describe('Button component', () => {
  const mockOnClick = jest.fn();

  it('renders correctly with title', () => {
    const { getByText } = render(<Button title="Click me" onClick={mockOnClick} />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeDefined();
  });

  it('calls onClick when button is pressed', () => {
    const { getByText } = render(<Button title="Click me" onClick={mockOnClick} />);
    const buttonElement = getByText('Click me');
    
    fireEvent.press(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  
});
