import './CartItem.css'

function CartItem({ item, onRemove }) {
  const { name, price, quantity } = item

  return (
    <div className="cart-item">
      <span className="cart-item__name">{name}</span>
      <span className="cart-item__quantity">Quantity: {quantity}</span>
      <span className="cart-item__price">${price.toFixed(2)}</span>
      <button type="button" className="cart-item__remove" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  )
}

export default CartItem
