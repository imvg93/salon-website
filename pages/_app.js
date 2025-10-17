import "../styles/globals.css";  // Use relative path
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  // Google Analytics 4 Integration
  useEffect(() => {
    // Only load GA4 if we have a measurement ID
    if (process.env.NEXT_PUBLIC_GA_ID) {
      // Load Google Analytics 4 script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics 4
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        // Additional GA4 configuration options
        page_title: document.title,
        page_location: window.location.href,
        // Enable enhanced measurement features
        send_page_view: true
      });
    } else {
      console.warn('Google Analytics ID not found. Please set NEXT_PUBLIC_GA_ID in your environment variables.');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Catwalk - Premium Beauty & Styling Services</title>
        <meta name="description" content="Professional beauty salon offering hair styling, makeup, facial treatments, and beauty training courses. Book your appointment today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="beauty salon, hair styling, makeup, facial treatments, beauty training, salon services" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catwalksalons.com" />
        <meta property="og:title" content="Catwalk - Premium Beauty & Styling Services" />
        <meta property="og:description" content="Professional beauty salon offering hair styling, makeup, facial treatments, and beauty training courses." />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.catwalksalons.com" />
        <meta property="twitter:title" content="Catwalk - Premium Beauty & Styling Services" />
        <meta property="twitter:description" content="Professional beauty salon offering hair styling, makeup, facial treatments, and beauty training courses." />
        <meta property="twitter:image" content="/images/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google Analytics 4 - Replace G-XXXXXXXXXX with your actual GA4 Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    send_page_view: true
                  });
                `,
              }}
            />
          </>
        )}
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
