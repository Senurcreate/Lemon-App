import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Guests must be between 1 and 10';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {isSubmitted ? (
        <div className="success-message">
          <h3>Thank you for your reservation, {formData.name}!</h3>
          <p>We'll see you on {formData.date} at {formData.time}.</p>
        </div>
      ) : (
        <>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </label>

          <label>
            Time:
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="">Select a time</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
            </select>
            {errors.time && <span className="error">{errors.time}</span>}
          </label>

          <label>
            Number of Guests:
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
            />
            {errors.guests && <span className="error">{errors.guests}</span>}
          </label>

          <label>
            Occasion:
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business</option>
            </select>
          </label>

          <button type="submit">Reserve Table</button>
        </>
      )}
    </form>
  );
};

export default BookingForm;