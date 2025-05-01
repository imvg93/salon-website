import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, subject, message, branch } = req.body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message || !branch) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Invalid phone number format' })
    }

    // Format the email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; text-align: center; margin-bottom: 20px;">New Contact Form Submission</h2>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 10px 0;"><strong>Branch:</strong> ${branch === 'kphb' ? 'Catwalk Ladies Salon - KPHB' : 'Catwalk Unisex Salon - Nizampet'}</p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          <p style="margin: 10px 0;"><strong>Message:</strong><br>${message}</p>
        </div>

        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #666; font-size: 14px;">This is an automated message from your salon website.</p>
        </div>
      </div>
    `;

    // Send email to salon
    const emailResponse = await resend.emails.send({
      from: 'Catwalk Salon <onboarding@resend.dev>',
      to: 'girishveeranki3@gmail.com',
      subject: `New Contact Form Submission - ${subject}`,
      html: emailContent,
    });

    if (!emailResponse || emailResponse.error) {
      console.error('Email sending failed:', emailResponse?.error);
      throw new Error(emailResponse?.error?.message || 'Failed to send email');
    }

    // Send confirmation email to the user
    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; text-align: center; margin-bottom: 20px;">Thank you for contacting Catwalk Salon!</h2>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a summary of your message:</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>

        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #666; font-size: 14px;">If you have any urgent queries, please feel free to call us at +91 99596 73434.</p>
          <p style="color: #666; font-size: 14px;">Best regards,<br>Team Catwalk</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'Catwalk Salon <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting Catwalk Salon',
      html: userEmailContent,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message: ' + (error.message || 'Unknown error')
    });
  }
} 