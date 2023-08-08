import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../Home';

jest.mock('../../Components/CardWrapper', () => 'MockedCardWrapper');

describe('Home', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Home />);
    const cardWrapper = getByTestId('card-wrapper');
    expect(cardWrapper).toBeTruthy();
  });
});
