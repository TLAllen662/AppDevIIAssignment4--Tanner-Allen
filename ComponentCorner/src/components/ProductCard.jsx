import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  const { name, price, image, description } = product

  return (
    <article className="product-card">
      <img src={image} alt={name} />
      <div className="product-card__details">
        <h2>{name}</h2>
        <p>{description}</p>
        <strong aria-label={`Price: $${price.toFixed(2)}`}>${price.toFixed(2)}</strong>
        <button type="button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
