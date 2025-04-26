// pages/confirmation.tsx
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const [appointmentDetails, setAppointmentDetails] = useState<any>(null);

  useEffect(() => {
    const details = localStorage.getItem("appointmentDetails");
    if (details) {
      setAppointmentDetails(JSON.parse(details));
    }
  }, []);

  if (!appointmentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Appointment Confirmed!</h2>
        <p className="text-xl mb-4">Thank you for booking with us. Here are your appointment details:</p>

        <div className="space-y-2">
          <p><strong>Name:</strong> {appointmentDetails.name}</p>
          <p><strong>Email:</strong> {appointmentDetails.email}</p>
          <p><strong>Phone:</strong> {appointmentDetails.phone}</p>
          <p><strong>Service:</strong> {appointmentDetails.service}</p>
          <p><strong>Date:</strong> {appointmentDetails.date}</p>
          <p><strong>Time:</strong> {appointmentDetails.time}</p>
          <p><strong>Notes:</strong> {appointmentDetails.notes || "None"}</p>
        </div>

        <div className="text-center mt-6">
          <p>We look forward to seeing you!</p>
        </div>
      </div>
    </main>
  );
}
