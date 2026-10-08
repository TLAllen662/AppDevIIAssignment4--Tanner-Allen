import { render, screen } from '@testing-library/react'
import HomePage from '../HomePage'

describe('HomePage', () => {
  it('renders the main store content', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: 'ComponentCorner Products' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Smart components for modern shopping')
    ).toBeInTheDocument()
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
  })
})
