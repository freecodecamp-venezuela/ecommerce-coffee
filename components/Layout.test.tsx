import { render, screen } from '@testing-library/react'

import Layout from './Layout'

describe('<Layout />', () => {
  it('should render the heading', () => {
   render(<Layout />);
   const Element = screen.getByText(/ecommerce/i);
      expect(Element).toMatchSnapshot();
  })
})
