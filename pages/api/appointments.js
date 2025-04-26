import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, phone, date, time, notes } = req.body;

    // Validate required fields
    if (!name || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Format the date and time for better readability
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send email notification with enhanced formatting
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; text-align: center; margin-bottom: 20px;">New Appointment Booking</h2>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 10px 0;"><strong>Customer Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Phone Number:</strong> ${phone}</p>
          <p style="margin: 10px 0;"><strong>Appointment Date:</strong> ${formattedDate}</p>
          <p style="margin: 10px 0;"><strong>Appointment Time:</strong> ${time}</p>
          ${notes ? `<p style="margin: 10px 0;"><strong>Special Requests:</strong><br>${notes}</p>` : ''}
        </div>

        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #666; font-size: 14px;">This is an automated message from your salon booking system.</p>
        </div>
      </div>
    `;

    try {
      // Send email to salon
      const emailResponse = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'girishveeranki3@gmail.com',
        subject: `New Appointment: ${name} - ${formattedDate}`,
        html: emailContent,
      });

      if (!emailResponse || emailResponse.error) {
        console.error('Email sending failed:', emailResponse?.error);
        throw new Error(emailResponse?.error?.message || 'Failed to send email');
      }

      return res.status(200).json({
        success: true,
        message: 'Appointment received successfully'
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email notification: ' + (emailError.message || 'Unknown error')
      });
    }
  } catch (error) {
    console.error('Error processing appointment:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process appointment: ' + (error.message || 'Unknown error')
    });
  }
} 