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

  // Format the date for better readability
  const formattedDate = new Date(appointmentDetails.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Format the time
  const formattedTime = new Date(`2000-01-01T${appointmentDetails.time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Appointment Confirmed!</h2>
          <p className="text-xl text-gray-600">Thank you for booking with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Personal Information</h3>
            <div className="space-y-2">
              <p><strong>Name:</strong> {appointmentDetails.name}</p>
              <p><strong>Email:</strong> {appointmentDetails.email}</p>
              <p><strong>Phone:</strong> {appointmentDetails.phone}</p>
              {appointmentDetails.age && <p><strong>Age:</strong> {appointmentDetails.age}</p>}
              {appointmentDetails.gender && <p><strong>Gender:</strong> {appointmentDetails.gender}</p>}
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Appointment Details</h3>
            <div className="space-y-2">
              <p><strong>Branch:</strong> {appointmentDetails.branch === 'kphb' ? 'Catwalk Ladies Salon - KPHB' : 'Catwalk Unisex Salon - Nizampet'}</p>
              <p><strong>Service:</strong> {appointmentDetails.service}</p>
              {appointmentDetails.subService && <p><strong>Specific Service:</strong> {appointmentDetails.subService}</p>}
              <p><strong>Date:</strong> {formattedDate}</p>
              <p><strong>Time:</strong> {formattedTime}</p>
              <p><strong>Duration:</strong> {appointmentDetails.duration} minutes</p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Additional Information</h3>
            <div className="space-y-2">
              {appointmentDetails.preferredStylist && <p><strong>Preferred Stylist:</strong> {appointmentDetails.preferredStylist}</p>}
              <p><strong>Previous Visit:</strong> {appointmentDetails.previousVisit === 'yes' ? 'Yes' : 'First Time Visit'}</p>
              {appointmentDetails.specialRequirements && (
                <p><strong>Special Requirements:</strong> {appointmentDetails.specialRequirements}</p>
              )}
              {appointmentDetails.notes && <p><strong>Additional Notes:</strong> {appointmentDetails.notes}</p>}
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Communication Preferences</h3>
            <div className="space-y-2">
              <p><strong>Preferred Contact:</strong> {appointmentDetails.preferredContact}</p>
              <p><strong>Reminder Preference:</strong> {appointmentDetails.reminderPreference}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-lg mb-2">We look forward to seeing you!</p>
          <p className="text-sm text-gray-600">If you need to make any changes to your appointment, please contact us at least 24 hours in advance.</p>
        </div>
      </div>
    </main>
  );
}
