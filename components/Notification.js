import { useState, useEffect } from 'react';
import styles from '../styles/Notification.module.css';

const Notification = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <p>{message}</p>
      <button onClick={() => {
        setIsVisible(false);
        onClose();
      }} className={styles.closeButton}>
        ×
      </button>
    </div>
  );
};

export default Notification; 