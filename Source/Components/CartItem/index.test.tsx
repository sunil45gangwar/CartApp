import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CartItem from '../CartItem';

describe('CartItem', () => {
  const mockItem = {
    key: 'item1',
    item: {
      img: 'image_url',
      name: 'Test Item',
      price: 10,
      id: 1,
    },
    quantity: 2,
  };

  it('renders correctly', () => {
    const { getByText } = render(<CartItem item={mockItem} />);
    expect(getByText(mockItem.item.name)).toBeTruthy();
    expect(getByText(`Quantity: ${mockItem.quantity}`)).toBeTruthy();
    expect(getByText(`Price: $${mockItem.quantity * mockItem.item.price}`)).toBeTruthy();
    expect(getByText('Discard Item')).toBeTruthy();
  });

  it('increments quantity when "+" button is pressed', async () => {
    const { getByText } = render(<CartItem item={mockItem} />);
    const addButton = getByText('+');
    
    fireEvent.press(addButton);
    
    await waitFor(() => {
      expect(getByText(`Quantity: ${mockItem.quantity + 1}`)).toBeTruthy();
      expect(getByText(`Price: $${(mockItem.quantity + 1) * mockItem.item.price}`)).toBeTruthy();
    });
  });

  it('decrements quantity when "-" button is pressed', async () => {
    const { getByText } = render(<CartItem item={mockItem} />);
    const subtractButton = getByText('-');
    
    fireEvent.press(subtractButton);
    
    await waitFor(() => {
      expect(getByText(`Quantity: ${mockItem.quantity - 1}`)).toBeTruthy();
      expect(getByText(`Price: $${(mockItem.quantity - 1) * mockItem.item.price}`)).toBeTruthy();
    });
  });
  
});
