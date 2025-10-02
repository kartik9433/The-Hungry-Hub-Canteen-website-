import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-top">
        <h2>Enjoy Canteen food !</h2>
        <p>Delivering quality food with love and care.</p>
      </div>

      <div className="footer-links">
        <ul>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/helpus">Contact</Link></li>
        </ul>
        <ul>
          <li><Link to="/helpus">FAQ</Link></li>
          <li><Link to="/helpus">Privacy Policy</Link></li>
          <li><Link to="/helpus">Terms & Conditions</Link></li>
        </ul>
      </div>

      <div className="footer-contact">
        <p>📍 Ghaziabad, India</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ support@mywebsite.com</p>
      </div>

      <div className="footer-bottom">
        <p>© 2025 My Website. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
