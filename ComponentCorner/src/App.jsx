import { useState } from 'react'
import './App.css'
import CartItem from './components/CartItem'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ]

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    console.log('Adding to cart:', product)
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <main>
      <Header storeName="ComponentCorner" cartCount={cart.length} />
      <Hero
        title="Smart components for modern shopping"
        subtitle="Find thoughtful tools and resources for building better digital experiences."
        ctaText="Explore products"
      />
      <h1>ComponentCorner Products</h1>
      <section id="products" className="product-grid" aria-label="Featured products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </section>
      <section id="cart" className="cart-section" aria-label="Shopping cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} />
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
        )}
      </section>
      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.example"
        phone="+1 (555) 010-2026"
        address="123 Component Lane, Interface City"
      />
    </main>
  )
}

export default App
