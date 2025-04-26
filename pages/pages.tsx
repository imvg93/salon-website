// pages/booking.tsx
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Book an Appointment</h1>
        <BookingForm />
      </div>
    </main>
  );
}
