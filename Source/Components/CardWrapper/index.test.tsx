import React from 'react';
import { render } from '@testing-library/react-native';
import CardWrapper from '../CardWrapper';

// Mock fetchData function
jest.mock('../../Network', () => ({
  fetchData: jest.fn(() => Promise.resolve([])), 
}));

describe('CardWrapper', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<CardWrapper />);
    const flatList = getByTestId('product-flatlist');
    expect(flatList).toBeDefined();
  });

  it('fetches and displays products', async () => {
    const mockData = [
      {
        id: '1',
        img: 'image_url_1',
        name: 'Product 1',
        price: 10,
      },
      {
        id: '2',
        img: 'image_url_2',
        name: 'Product 2',
        price: 20,
      },
    ];

    // Mock fetchData to return mockData
    require('../../Network').fetchData.mockResolvedValueOnce(mockData);

    const { getByText, findAllByTestId } = render(<CardWrapper />);
    
    // Wait for products to be rendered
    const productCards = await findAllByTestId('product-card');
    expect(productCards).toHaveLength(mockData.length);

    // Check if product names are rendered
    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
  });

  it('handles fetch error', async () => {
    const errorMessage = 'Network error';
    
    // Mock fetchData to throw an error
    require('../../Network').fetchData.mockRejectedValueOnce(new Error(errorMessage));

    const { getByText } = render(<CardWrapper />);

    // Check if error message is displayed
    expect(getByText(`Error fetching products data: ${errorMessage}`)).toBeTruthy();
  });
});
