// pages/api/booking.ts
import { NextApiRequest, NextApiResponse } from "next";

// Handle the form submission
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, service, date, time, notes } = req.body;

      // Here, you can save the data to a database or send an email via Resend API
      console.log('Received booking data:', { name, email, phone, service, date, time, notes });

      // Simulating email or database action
      // For now, let's return a success response
      return res.status(200).json({ message: "Booking received successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
  } else {
    // If not a POST request, return 405 Method Not Allowed
    return res.status(405).json({ message: "Method not allowed" });
  }
}
