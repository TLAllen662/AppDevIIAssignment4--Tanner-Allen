import { render, screen } from '@testing-library/react'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const product = {
    name: 'Test Headphones',
    price: 79.99,
    image: '/headphones.jpg',
    description: 'Comfortable wireless headphones',
  }

  it('renders product information from props and an Add to Cart button', () => {
    render(<ProductCard product={product} onAddToCart={() => {}} />)

    expect(
      screen.getByRole('heading', { name: 'Test Headphones' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Comfortable wireless headphones')
    ).toBeInTheDocument()
    expect(screen.getByText('$79.99')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Add to Cart' })
    ).toBeInTheDocument()
  })
})
