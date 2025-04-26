import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
     
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Welcome to Catwalk</h1>
          <p>Beauty salon & professional hair and makeup training in one destination.</p>
          <a href="/services" className={styles.button}>View Our Services</a>
        </section>
       
        {/* Contact form here */}
        <ContactForm />
      </main>
    </>
  );
}
