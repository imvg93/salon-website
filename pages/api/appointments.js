// pages/api/appointments.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      age,
      gender,
      branch,
      service,
      subService,
      date,
      time,
      duration,
      preferredStylist,
      previousVisit,
      specialRequirements,
      notes,
      preferredContact,
      reminderPreference
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !branch || !service) {
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

    // Format the time
    const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    // Send email notification with enhanced formatting
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; text-align: center; margin-bottom: 20px;">New Appointment Booking</h2>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #444; margin-bottom: 10px;">Customer Information</h3>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
          ${age ? `<p style="margin: 10px 0;"><strong>Age:</strong> ${age}</p>` : ''}
          ${gender ? `<p style="margin: 10px 0;"><strong>Gender:</strong> ${gender}</p>` : ''}
          
          <h3 style="color: #444; margin: 20px 0 10px;">Appointment Details</h3>
          <p style="margin: 10px 0;"><strong>Branch:</strong> ${branch === 'kphb' ? 'Catwalk Ladies Salon - KPHB' : 'Catwalk Unisex Salon - Nizampet'}</p>
          <p style="margin: 10px 0;"><strong>Service:</strong> ${service}</p>
          ${subService ? `<p style="margin: 10px 0;"><strong>Specific Service:</strong> ${subService}</p>` : ''}
          <p style="margin: 10px 0;"><strong>Date:</strong> ${formattedDate}</p>
          <p style="margin: 10px 0;"><strong>Time:</strong> ${formattedTime}</p>
          <p style="margin: 10px 0;"><strong>Duration:</strong> ${duration} minutes</p>
          
          <h3 style="color: #444; margin: 20px 0 10px;">Additional Information</h3>
          ${preferredStylist ? `<p style="margin: 10px 0;"><strong>Preferred Stylist:</strong> ${preferredStylist}</p>` : ''}
          <p style="margin: 10px 0;"><strong>Previous Visit:</strong> ${previousVisit === 'yes' ? 'Yes' : 'First Time Visit'}</p>
          ${specialRequirements ? `<p style="margin: 10px 0;"><strong>Special Requirements:</strong><br>${specialRequirements}</p>` : ''}
          ${notes ? `<p style="margin: 10px 0;"><strong>Additional Notes:</strong><br>${notes}</p>` : ''}
          
          <h3 style="color: #444; margin: 20px 0 10px;">Communication Preferences</h3>
          <p style="margin: 10px 0;"><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
          <p style="margin: 10px 0;"><strong>Reminder Preference:</strong> ${reminderPreference}</p>
        </div>

        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #666; font-size: 14px;">This is an automated message from your salon booking system.</p>
        </div>
      </div>
    `;

    try {
      // Send email to salon
      const emailResponse = await resend.emails.send({
        from: 'Catwalk Salon <onboarding@resend.dev>',
        to: 'girishveeranki3@gmail.com',
        subject: `New Appointment: ${name} - ${formattedDate}`,
        html: emailContent,
      });

      // Send confirmation email to customer
      const customerEmailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; text-align: center; margin-bottom: 20px;">Appointment Confirmation</h2>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 10px 0;">Dear ${name},</p>
            <p style="margin: 10px 0;">Thank you for booking an appointment with Catwalk Salon. Here are your appointment details:</p>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #fff; border-radius: 5px;">
              <p style="margin: 10px 0;"><strong>Branch:</strong> ${branch === 'kphb' ? 'Catwalk Ladies Salon - KPHB' : 'Catwalk Unisex Salon - Nizampet'}</p>
              <p style="margin: 10px 0;"><strong>Service:</strong> ${service}</p>
              ${subService ? `<p style="margin: 10px 0;"><strong>Specific Service:</strong> ${subService}</p>` : ''}
              <p style="margin: 10px 0;"><strong>Date:</strong> ${formattedDate}</p>
              <p style="margin: 10px 0;"><strong>Time:</strong> ${formattedTime}</p>
              <p style="margin: 10px 0;"><strong>Duration:</strong> ${duration} minutes</p>
            </div>

            <p style="margin: 10px 0;">We look forward to seeing you!</p>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 14px;">If you need to make any changes to your appointment, please contact us at least 24 hours in advance.</p>
            </div>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: 'Catwalk Salon <onboarding@resend.dev>',
        to: email,
        subject: `Appointment Confirmation - ${formattedDate}`,
        html: customerEmailContent,
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
  