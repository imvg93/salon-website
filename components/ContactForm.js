import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    branch: 'kphb'
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          branch: 'kphb'
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus({
        type: 'error',
        message: err.message || 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        {status.message && (
          <div className={`${styles.statusMessage} ${
            status.type === 'success' ? styles.success :
            status.type === 'error' ? styles.error :
            styles.loading
          }`}>
            {status.message}
          </div>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="branch">Select Branch *</label>
          <select
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="kphb">Catwalk Ladies Salon - KPHB</option>
            <option value="nizampet">Catwalk Unisex Salon - Nizampet</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Enter message subject"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className={styles.submitButton}
        >
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
