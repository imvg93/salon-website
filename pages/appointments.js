import BookingForm from '../components/BookingForm';
import styles from '../styles/booked.module.css';
import Link from 'next/link';

const Appointments = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.salonName}><strong>Catwalk</strong> Hair and Beauty parlour </h1>
        <Link href="/" className={styles.homeButton}>
          Back to Home
        </Link>
      </div>
      <BookingForm />
    </div>
  );
};

export default Appointments; 