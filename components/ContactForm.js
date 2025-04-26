import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch(`${window.location.origin}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus(`Error: ${data.error || 'Something went wrong. Please try again.'}`);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus(`Failed to send: ${err.message || 'Please try again later.'}`);
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Phone Number:
          <input type="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />
        </label>

        <button type="submit">Send Message</button>
        <p>{status}</p>
      </form>
    </section>
  );
}
