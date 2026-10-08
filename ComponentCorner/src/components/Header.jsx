import './Header.css'

function Header({ storeName, cartCount }) {
  return (
    <header>
      <h1>{storeName}</h1>
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  )
}

export default Header
