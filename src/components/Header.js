import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Little Lemon Logo" className="logo" />
          <nav className="nav">
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Sobre Nosotros</a></li>
              <li><a href="/menu">Menú</a></li>
              <li><a href="/reservations">Reservas</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;