// app/about-us/page.tsx (or pages/about-us.tsx if using pages directory)
import React from "react";

const AboutUsPage = () => {
  return (
    <main className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto space-y-16">
      {/* 1. Header */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg text-gray-600">Empowering Beauty & Confidence Since 2011</p>
      </section>

      {/* 2. Our Story */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p>
          Our journey began in 2011 with a small salon and a big dream — to make people feel confident, beautiful, and empowered.
          Since then, we've grown into a full-service beauty destination and a respected training center, helping clients and aspiring beauticians alike.
        </p>
      </section>

      {/* 3. What We Do */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Salon Services: Haircuts, styling, coloring, facials, and more</li>
          <li>Beauty Training: Certified courses in hair, makeup, skincare, and salon management</li>
        </ul>
      </section>

      {/* 4. Why Choose Us */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Over a decade of experience</li>
          <li>Thousands of happy clients</li>
          <li>Modern techniques with a personal touch</li>
          <li>Certified and experienced trainers</li>
        </ul>
      </section>

      {/* 5. Route Map / Timeline */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
        <div className="space-y-4 border-l-2 border-purple-600 pl-6">
          <div>
            <h3 className="font-semibold">2011</h3>
            <p>Opened our very first salon.</p>
          </div>
          <div>
            <h3 className="font-semibold">2014</h3>
            <p>Launched advanced hair and beauty courses.</p>
          </div>
          <div>
            <h3 className="font-semibold">2017</h3>
            <p>With the trust of over 10,000 valued clients.</p>
          </div>
          <div>
            <h3 className="font-semibold">2020</h3>
            <p>Crossed 10,000 satisfied clients milestone.</p>
          </div>
          <div>
            <h3 className="font-semibold">2023</h3>
            <p>Introduced online learning for beauty students.</p>
          </div>
          <div>
            <h3 className="font-semibold">Today</h3>
            <p>Still growing with love, trust, and your continued support ❤️</p>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Ready to Book or Learn?</h2>
        <p>Join our salon family — whether you're looking for stunning beauty services or want to become a beauty expert!</p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">Book an Appointment</button>
      </section>
    </main>
  );
};

export default AboutUsPage;
