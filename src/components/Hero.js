import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Un acogedor restaurante mediterráneo que combina recetas tradicionales con un toque moderno.</p>
          </div>
          <div className="hero-image">
            <img src={process.env.PUBLIC_URL + '/images/restaurant.jpg'} alt="Interior del restaurante Little Lemon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;