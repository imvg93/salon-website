// components/BookingForm.tsx
"use client";

import styles from './booked.module.css';
import { useState } from "react";
import { useRouter } from "next/router";



export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [status, setStatus] = useState(""); // Holds success or error message
  const [isSubmitting, setIsSubmitting] = useState(false); // For form submission status
  const router = useRouter(); // for page redirection

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(""); // Reset status before submitting

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Success: Store form data and set status
        setStatus("Your appointment has been booked successfully!");
        localStorage.setItem("appointmentDetails", JSON.stringify(formData)); // Save details to localStorage

        // Redirect to confirmation page after a delay to show success message
        setTimeout(() => {
          router.push("/confirmation");
        }, 2000); // 2 seconds delay
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold">Book an Appointment</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full p-2 border rounded"
        required
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Service</option>
        <option value="Haircut">Haircut</option>
        <option value="Facial">Facial</option>
        <option value="Makeup">Makeup</option>
        <option value="Training">Training Program</option>
      </select>

      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="time"
        value={formData.time}
        onChange={handleChange}
        type="time"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Additional notes"
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Booking..." : "Book Now"}
      </button>

      {status && (
        <p
          className={`