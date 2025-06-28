import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Little Lemon Logo" />
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Navegación</h3>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Sobre Nosotros</a></li>
                <li><a href="/menu">Menú</a></li>
                <li><a href="/reservations">Reservas</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contacto</h3>
              <ul>
                <li>123 Lemon Street</li>
                <li>Chicago, IL 60601</li>
                <li>Tel: (123) 456-7890</li>
                <li>info@littlelemon.com</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Horario</h3>
              <ul>
                <li>Lunes - Viernes: 11am - 10pm</li>
                <li>Sábado: 11am - 11pm</li>
                <li>Domingo: 12pm - 9pm</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Little Lemon. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;