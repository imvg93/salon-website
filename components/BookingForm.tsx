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
    <form onSubmit={handleSubmit} className="bg-transparent p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Book Your Appointment</h2>
        <p className="text-gray-600 text-sm sm:text-base">Fill in your details to schedule your visit</p>
      </div>

      {/* Personal Information Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
        </div>
        <div className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-500 text-base"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-500 text-base"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-500 text-base"
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age (optional)"
              type="number"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-500 text-base"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
              required
            >
              <option value="" className="text-gray-900">Select Gender</option>
              <option value="male" className="text-gray-900">Male</option>
              <option value="female" className="text-gray-900">Female</option>
              <option value="other" className="text-gray-900">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appointment Details Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-lg font-semibold text-gray-800">Appointment Details</h3>
        </div>
        <div className="space-y-4">
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-[#ff3366] focus:border-[#ff3366] bg-white/10 backdrop-blur-sm text-gray-800 text-base ${
              formData.gender === 'male' && formData.branch === 'kphb' ? 'border-red-500' : 'border-white/20'
            }`}
            required
          >
            <option value="" className="text-gray-900">Select Branch</option>
            <option 
              value="kphb" 
              disabled={formData.gender === 'male'}
              className="text-gray-900"
            >
              Catwalk Ladies Salon - KPHB
            </option>
            <option value="nizampet" className="text-gray-900">Catwalk Unisex Salon - Nizampet</option>
          </select>

          {formData.gender === 'male' && formData.branch === 'kphb' && (
            <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
              KPHB branch is for ladies only. Please select Nizampet branch for booking.
            </p>
          )}

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
            required
          >
            <option value="" className="text-gray-900">Select Service</option>
            <option value="haircut" className="text-gray-900">Haircut & Styling</option>
            <option value="coloring" className="text-gray-900">Hair Coloring</option>
            <option value="facial" className="text-gray-900">Facial</option>
            <option value="makeup" className="text-gray-900">Makeup</option>
            <option value="manicure" className="text-gray-900">Manicure & Pedicure</option>
            <option value="spa" className="text-gray-900">Spa Treatment</option>
            <option value="package" className="text-gray-900">Full Package</option>
            <option value="training" className="text-gray-900">Training Program</option>
            <option value="tattoo" className="text-gray-900">Tattoo Services</option>
            <option value="not mentioned" className="text-gray-900">Other</option>
          </select>

          <select
            name="subService"
            value={formData.subService}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
          >
            <option value="" className="text-gray-900">Select Specific Service</option>
            {formData.service === "haircut" && (
              <>
                <option value="mens-cut" className="text-gray-900">Men's Haircut</option>
                <option value="womens-cut" className="text-gray-900">Women's Haircut</option>
                <option value="kids-cut" className="text-gray-900">Kid's Haircut</option>
                <option value="styling" className="text-gray-900">Hair Styling</option>
              </>
            )}
            {formData.service === "coloring" && (
              <>
                <option value="full-color" className="text-gray-900">Full Color</option>
                <option value="highlights" className="text-gray-900">Highlights</option>
                <option value="balayage" className="text-gray-900">Balayage</option>
                <option value="root-touchup" className="text-gray-900">Root Touch-up</option>
              </>
            )}
            {formData.service === "facial" && (
              <>
                <option value="basic" className="text-gray-900">Basic Facial</option>
                <option value="premium" className="text-gray-900">Premium Facial</option>
                <option value="bridal" className="text-gray-900">Bridal Facial</option>
              </>
            )}
            {formData.service === "tattoo" && (
              <>
                <option value="custom-design" className="text-gray-900">Custom Design</option>
                <option value="small-tattoo" className="text-gray-900">Small Tattoo</option>
                <option value="medium-tattoo" className="text-gray-900">Medium Tattoo</option>
                <option value="large-tattoo" className="text-gray-900">Large Tattoo</option>
                <option value="cover-up" className="text-gray-900">Cover-up Tattoo</option>
                <option value="touch-up" className="text-gray-900">Touch-up Service</option>
              </>
            )}
          </select>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                name="time"
                value={formData.time}
                onChange={handleChange}
                type="time"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
                required
              >
                <option value="30" className="text-gray-900">30 minutes</option>
                <option value="60" className="text-gray-900">1 hour</option>
                <option value="90" className="text-gray-900">1.5 hours</option>
                <option value="120" className="text-gray-900">2 hours</option>
                <option value="180" className="text-gray-900">3 hours</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-lg font-semibold text-gray-800">Additional Information</h3>
        </div>
        <div className="space-y-4">
          <input
            name="preferredStylist"
            value={formData.preferredStylist}
            onChange={handleChange}
            placeholder="Preferred Stylist (Optional)"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-500 text-base"
          />
          <select
            name="previousVisit"
            value={formData.previousVisit}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
          >
            <option value="no" className="text-gray-900">First Time Visit</option>
            <option value="yes" className="text-gray-900">Previous Customer</option>
          </select>
          <textarea
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            placeholder="Any special requirements or allergies?"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-500 text-base h-24 resize-none"
          />
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Additional notes or requests"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-500 text-base h-24 resize-none"
          />
        </div>
      </div>

      {/* Communication Preferences Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-lg font-semibold text-gray-800">Communication Preferences</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
          >
            <option value="phone" className="text-gray-900">Phone</option>
            <option value="email" className="text-gray-900">Email</option>
            <option value="whatsapp" className="text-gray-900">WhatsApp</option>
          </select>
          <select
            name="reminderPreference"
            value={formData.reminderPreference}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-base"
          >
            <option value="sms" className="text-gray-900">SMS Reminder</option>
            <option value="email" className="text-gray-900">Email Reminder</option>
            <option value="whatsapp" className="text-gray-900">WhatsApp Reminder</option>
            <option value="none" className="text-gray-900">No Reminder</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className={`w-full px-6 py-4 rounded-xl transition-all duration-300 text-lg font-semibold ${
          formData.gender === 'male' && formData.branch === 'kphb'
            ? 'bg-gray-300 cursor-not-allowed text-gray-500'
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/25'
        }`}
        disabled={isSubmitting || (formData.gender === 'male' && formData.branch === 'kphb')}
      >
        {isSubmitting ? "Booking..." : "Book Appointment"}
      </button>

      {status && (
        <div className={`text-center p-4 rounded-xl text-base ${
          status.includes("success") 
            ? "bg-green-50 text-green-700 border border-green-200" 
            : "bg-red-50 text-red-700 border border-red-200"
        }`}>
          {status}
        </div>
      )}
    </form>
  );
}