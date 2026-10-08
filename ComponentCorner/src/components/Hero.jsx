import './Hero.css'

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="store-hero">
      <img
        src="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics"
        alt="Shop Electronics banner"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="store-hero__content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <a href="#products">{ctaText}</a>
      </div>
    </section>
  )
}

export default Hero
