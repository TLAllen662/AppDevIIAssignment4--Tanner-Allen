import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const product = {
    name: 'Test Headphones',
    price: 79.99,
    image: '/headphones.jpg',
    description: 'Comfortable wireless headphones',
  }

  it('renders product information from props and an Add to Cart button', () => {
    render(<ProductCard product={product} onAddToCart={vi.fn()} />)

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

  it('calls onAddToCart with the product when Add to Cart is clicked', async () => {
    const user = userEvent.setup()
    const onAddToCart = vi.fn()
    render(<ProductCard product={product} onAddToCart={onAddToCart} />)

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))

    expect(onAddToCart).toHaveBeenCalledOnce()
    expect(onAddToCart).toHaveBeenCalledWith(product)
  })
})
