import React, { useState } from 'react';
import './BookingForm.css';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Cumpleaños');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!date) newErrors.date = 'Por favor selecciona una fecha';
    if (!name.trim()) newErrors.name = 'Por favor ingresa tu nombre';
    if (!email.trim()) {
      newErrors.email = 'Por favor ingresa tu email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }
    if (!phone.trim()) newErrors.phone = 'Por favor ingresa tu teléfono';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const formData = {
        date,
        time,
        guests,
        occasion,
        name,
        email,
        phone,
        specialRequests
      };
      
      submitForm(formData);
    }
  };

  return (
    <section className="booking-section">
      <div className="container">
        <h2 className="section-title">Reserva una Mesa</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="res-date">Fecha*</label>
              <input 
                type="date" 
                id="res-date" 
                value={date}
                onChange={handleDateChange}
                required
                aria-describedby="date-error"
              />
              {errors.date && <span id="date-error" className="error">{errors.date}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="res-time">Hora</label>
              <select 
                id="res-time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                {availableTimes.map((timeOption) => (
                  <option key={timeOption} value={timeOption}>{timeOption}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Número de comensales</label>
              <input 
                type="number" 
                id="guests" 
                min="1" 
                max="10" 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="occasion">Ocasión</label>
              <select 
                id="occasion" 
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Aniversario">Aniversario</option>
                <option value="Reunión de negocios">Reunión de negocios</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nombre completo*</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-describedby="name-error"
              />
              {errors.name && <span id="name-error" className="error">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="email-error"
              />
              {errors.email && <span id="email-error" className="error">{errors.email}</span>}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Teléfono*</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              aria-describedby="phone-error"
            />
            {errors.phone && <span id="phone-error" className="error">{errors.phone}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="special-requests">Peticiones especiales</label>
            <textarea 
              id="special-requests" 
              rows="4"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            ></textarea>
          </div>
          
          <div className="form-submit">
            <button type="submit" className="btn">Confirmar Reserva</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;