import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import CartItem from '../CartItem'

describe('CartItem', () => {
  const item = {
    id: 42,
    name: 'Wireless Mouse',
    price: 24.99,
    quantity: 3,
  }

  it('renders the item name, quantity, and price', () => {
    render(<CartItem item={item} onRemove={vi.fn()} />)

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument()
    expect(screen.getByText('Quantity: 3')).toBeInTheDocument()
    expect(screen.getByText('$24.99')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument()
  })

  it('calls onRemove with the item id when Remove is clicked', async () => {
    const user = userEvent.setup()
    const onRemove = vi.fn()
    render(<CartItem item={item} onRemove={onRemove} />)

    await user.click(screen.getByRole('button', { name: 'Remove' }))

    expect(onRemove).toHaveBeenCalledOnce()
    expect(onRemove).toHaveBeenCalledWith(item.id)
  })
})
