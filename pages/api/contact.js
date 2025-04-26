import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Debug environment variables
console.log('Environment variables check:');
console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✓' : '✗');
console.log('SUPABASE_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✓' : '✗');
console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✓' : '✗');

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Initialize Resend API client
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log('API route hit with method:', req.method);

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, message, appointmentDate } = req.body;
    console.log('Received data:', { name, phone, message, appointmentDate });

    // Validate input
    if (!name || !phone || !message || !appointmentDate) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Insert data into Supabase
    const { data, error: dbError } = await supabase
      .from('bookings') // Assuming 'bookings' is your table name
      .insert([
        {
          name,
          phone,
          message,
          appointment_date: appointmentDate, // Assuming you want to store the appointment date
        },
      ]);

    if (dbError) {
      console.error('Error inserting into Supabase:', dbError);
      return res.status(500).json({ error: `Database error: ${dbError.message}` });
    }
    console.log('Data inserted into Supabase successfully:', data);

    // Send Email with Resend
    try {
      console.log('Attempting to send email...');
      await resend.emails.send({
        from: 'Your Salon <onboarding@resend.dev>',
        to: 'girishveeranki3@gmail.com',
        subject: 'New Booking/Contact Form Submission',
        html: `
          <h3>New message from your salon website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br>${message}</p>
          <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
        `,
      });
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email error:', emailError);
      return res.status(500).json({ error: `Email error: ${emailError.message}` });
    }

    res.status(200).json({ success: true, message: 'Message sent and booking saved successfully!' });
  } catch (error) {
    console.error('Unexpected error in API route:', error);
    res.status(500).json({ error: `Unexpected error: ${error.message}` });
  }
}
