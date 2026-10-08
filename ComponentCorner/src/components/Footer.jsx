import './Footer.css'

function Footer({ storeName, email, phone, address }) {
  return (
    <footer id="contact">
      <div className="footer-section">
        <h2>{storeName}</h2>
        <p>{address}</p>
      </div>
      <address className="footer-section">
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </address>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} {storeName}
      </p>
    </footer>
  )
}

export default Footer
