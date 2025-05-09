// components/BookingForm.tsx
"use client";

import styles from '../styles/booked.module.css';
import { useState } from "react";
import { useRouter } from "next/router";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    
    // Appointment Details
    branch: "kphb",
    service: "",
    subService: "", // For specific service options
    date: "",
    time: "",
    duration: "60", // Default duration in minutes
    
    // Additional Information
    preferredStylist: "",
    previousVisit: "no",
    specialRequirements: "",
    notes: "",
    
    // Communication Preferences
    preferredContact: "phone",
    reminderPreference: "sms"
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // If gender is changed to male and branch is KPHB, automatically switch to Nizampet
    if (name === 'gender' && value === 'male' && formData.branch === 'kphb') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        branch: 'nizampet'
      }));
      setStatus("KPHB branch is for ladies only. Branch automatically changed to Nizampet.");
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if male customer is trying to book at KPHB branch
    if (formData.gender === 'male' && formData.branch === 'kphb') {
      setStatus("Sorry, KPHB branch is for ladies only. Please select Nizampet branch for booking.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your appointment has been booked successfully!");
        localStorage.setItem("appointmentDetails", JSON.stringify(formData));
        setTimeout(() => {
          router.push("/confirmation");
        }, 2000);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-4 sm:p-8 rounded-xl shadow-lg space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-blue-600">Book Your Salon Appointment</h2>

      {/* Personal Information Section */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-semibold border-b border-gray-200 pb-2 text-blue-500">Personal Information</h3>
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600 placeholder-gray-400"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
            className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600 placeholder-gray-400"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600 placeholder-gray-400"
            required
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age(optional)"
              type="number"
              className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600 placeholder-gray-400"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appointment Details Section */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-semibold border-b border-gray-200 pb-2 text-blue-500">Appointment Details</h3>
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className={`w-full p-2.5 sm:p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600 ${
              formData.gender === 'male' && formData.branch === 'kphb' ? 'border-red-500' : 'border-gray-200'
            }`}
            required
          >
            <option value="">Select Branch</option>
            <option 
              value="kphb" 
              disabled={formData.gender === 'male'}
            >
              Catwalk Ladies Salon - KPHB
            </option>
            <option value="nizampet">Catwalk Unisex Salon - Nizampet</option>
          </select>

          {formData.gender === 'male' && formData.branch === 'kphb' && (
            <p className="text-red-500 text-sm">
              KPHB branch is for ladies only. Please select Nizampet branch for booking.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
              required
            >
              <option value="">Select Service</option>
              <option value="haircut">Haircut & Styling</option>
              <option value="coloring">Hair Coloring</option>
              <option value="facial">Facial</option>
              <option value="makeup">Makeup</option>
              <option value="manicure">Manicure & Pedicure</option>
              <option value="spa">Spa Treatment</option>
              <option value="package">Full Package</option>
              <option value="training">Training Program</option>
              <option value="tattoo">Tattoo Services</option>
              <option value="not mentioned">not mentioned</option>
            </select>

            <select
              name="subService"
              value={formData.subService}
              onChange={handleChange}
              className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
            >
              <option value="">Select Specific Service</option>
              {formData.service === "haircut" && (
                <>
                  <option value="mens-cut">Men's Haircut</option>
                  <option value="womens-cut">Women's Haircut</option>
                  <option value="kids-cut">Kid's Haircut</option>
                  <option value="styling">Hair Styling</option>
                </>
              )}
              {formData.service === "coloring" && (
                <>
                  <option value="full-color">Full Color</option>
                  <option value="highlights">Highlights</option>
                  <option value="balayage">Balayage</option>
                  <option value="root-touchup">Root Touch-up</option>
                </>
              )}
              {formData.service === "facial" && (
                <>
                  <option value="basic">Basic Facial</option>
                  <option value="premium">Premium Facial</option>
                  <option value="bridal">Bridal Facial</option>
                </>
              )}
              {formData.service === "tattoo" && (
                <>
                  <option value="custom-design">Custom Design</option>
                  <option value="small-tattoo">Small Tattoo</option>
                  <option value="medium-tattoo">Medium Tattoo</option>
                  <option value="large-tattoo">Large Tattoo</option>
                  <option value="cover-up">Cover-up Tattoo</option>
                  <option value="touch-up">Touch-up Service</option>
                </>
              )}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-medium text-blue-500">Date</label>
              <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
                required
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-medium text-blue-500">Time</label>
              <input
                name="time"
                value={formData.time}
                onChange={handleChange}
                type="time"
                className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
                required
              />
            </div>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
              required
            >
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
              <option value="120">2 hours</option>
              <option value="180">3 hours</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-semibold border-b border-gray-200 pb-2 text-blue-500">Additional Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <input
            name="preferredStylist"
            value={formData.preferredStylist}
            onChange={handleChange}
            placeholder="Preferred Stylist (Optional)"
            className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600 placeholder-gray-400"
          />
          <select
            name="previousVisit"
            value={formData.previousVisit}
            onChange={handleChange}
            className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
          >
            <option value="no">First Time Visit</option>
            <option value="yes">Previous Customer</option>
          </select>
        </div>
        <textarea
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          placeholder="Any special requirements or allergies?"
          className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600 placeholder-gray-400 h-20 sm:h-24"
        />
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Additional notes or requests"
          className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600 placeholder-gray-400 h-20 sm:h-24"
        />
      </div>

      {/* Communication Preferences Section */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-semibold border-b border-gray-200 pb-2 text-blue-500">Communication Preferences</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <select
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
          >
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
          <select
            name="reminderPreference"
            value={formData.reminderPreference}
            onChange={handleChange}
            className="w-full p-2.5 sm:p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-blue-600"
          >
            <option value="sms">SMS Reminder</option>
            <option value="email">Email Reminder</option>
            <option value="whatsapp">WhatsApp Reminder</option>
            <option value="none">No Reminder</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors duration-200 text-base sm:text-lg ${
          formData.gender === 'male' && formData.branch === 'kphb'
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 font-medium'
        }`}
        disabled={isSubmitting || (formData.gender === 'male' && formData.branch === 'kphb')}
      >
        {isSubmitting ? "Booking..." : "Book Appointment"}
      </button>

      {status && (
        <p className={`text-center p-2.5 sm:p-3 rounded text-sm sm:text-base ${
          status.includes("success") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
        }`}>
          {status}
        </p>
      )}
    </form>
  );
}