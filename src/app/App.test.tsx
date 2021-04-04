import React from 'react';
import { render } from '@testing-library/react';

test('dummy placeholder test', () => {
  const { getByText } = render(
    <div>
      hi
    </div>
  );

  expect(getByText("hi")).toBeInTheDocument();
});
