import "../styles/globals.css";  // Use relative path
import "../styles/AboutUs.css";  // Add AboutUs styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
