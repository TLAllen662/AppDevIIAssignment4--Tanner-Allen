import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../App'

const CART_STORAGE_KEY = 'cart'

describe('App cart persistence', () => {
  let getItem
  let setItem

  beforeEach(() => {
    getItem = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null)
    setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {})
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('renders the app', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'ComponentCorner Products' })
    ).toBeInTheDocument()
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
  })

  it('loads the cart from localStorage on startup', () => {
    const savedCart = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        image: 'https://placehold.co/600x400',
        description: 'Premium noise-cancelling headphones with 30-hour battery life',
        quantity: 1,
      },
    ]
    getItem.mockReturnValue(JSON.stringify(savedCart))

    render(<App />)

    expect(getItem).toHaveBeenCalledWith(CART_STORAGE_KEY)
    const cart = within(screen.getByRole('region', { name: 'Shopping cart' }))
    expect(cart.getByText('Wireless Headphones')).toBeInTheDocument()
    expect(cart.getByText('Total: $99.99')).toBeInTheDocument()
  })

  it('saves cart changes to localStorage', async () => {
    const user = userEvent.setup()
    render(<App />)
    setItem.mockClear()

    const product = screen
      .getByRole('heading', { name: 'Wireless Headphones' })
      .closest('article')
    await user.click(within(product).getByRole('button', { name: 'Add to Cart' }))

    expect(setItem).toHaveBeenLastCalledWith(
      CART_STORAGE_KEY,
      JSON.stringify([
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 99.99,
          image: 'https://placehold.co/600x400',
          description: 'Premium noise-cancelling headphones with 30-hour battery life',
          quantity: 1,
        },
      ])
    )
    expect(screen.getByText('Total: $99.99')).toBeInTheDocument()
  })
})
