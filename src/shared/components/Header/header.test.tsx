import { render, screen } from '@testing-library/react';

import Header from './';

describe('Header Component tests', () => {
  it('render text in header', () => {
    render(<Header />);

    const headerText = screen.getByTestId('title').textContent;
    expect(headerText).toBe('On GPS');
  });
});
