// pages/about-us.tsx
import React from "react";
import Head from "next/head";
import AboutUs from "../components/Aboutus";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        {/* ==============================================
             ABOUT PAGE - SEO META TAGS
             ============================================== */}

        {/* Basic Meta Tags */}
        <title>About Catwalk Salons - Beauty Excellence Since 2011 in Hyderabad</title>
        <meta name="description" content="Discover Catwalk Salons' journey since 2011. Leading beauty salon & training academy in Hyderabad with 20,000+ satisfied clients. Expert team, premium services & professional courses." />
        <meta name="keywords" content="about catwalk salons, beauty salon history Hyderabad, professional beauty training, experienced beauty experts, salon story, beauty academy journey" />
        <meta name="author" content="Catwalk Salons" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.catwalksalons.com/about-us" />

        {/* Open Graph Tags (Facebook/LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Catwalk Salons - Beauty Excellence Since 2011 in Hyderabad" />
        <meta property="og:description" content="Learn about Catwalk Salons' inspiring journey from 2011. 20,000+ satisfied clients, expert team, and comprehensive beauty training programs in Hyderabad." />
        <meta property="og:url" content="https://www.catwalksalons.com/about-us" />
        <meta property="og:image" content="https://www.catwalksalons.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Catwalk Salons" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Catwalk Salons - Beauty Excellence Since 2011 in Hyderabad" />
        <meta name="twitter:description" content="Learn about Catwalk Salons' inspiring journey from 2011. 20,000+ satisfied clients, expert team, and comprehensive beauty training programs in Hyderabad." />
        <meta name="twitter:image" content="https://www.catwalksalons.com/og-image.jpg" />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.catwalksalons.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.catwalksalons.com/about-us"
              }
            ]
          })
        }} />

        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Catwalk Salons",
            "description": "Premium beauty salon and training academy established in 2011, serving over 20,000 satisfied clients in Hyderabad",
            "url": "https://www.catwalksalons.com",
            "foundingDate": "2011",
            "numberOfEmployees": "10-50",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "JNTU to Hitech city road, Near MIG Bus-stop",
              "addressLocality": "KPHB",
              "addressRegion": "Telangana",
              "postalCode": "500072",
              "addressCountry": "IN"
            },
            "telephone": "+91-99596-73434",
            "sameAs": [
              "https://www.instagram.com/catwalk__salon/"
            ]
          })
        }} />
      </Head>
      <main>
        <AboutUs />
      </main>
    </>
  );
}
