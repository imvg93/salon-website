// pages/api/appointments.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, phone, date, time, notes } = req.body;
  
      // Simple example logic
      if (!name || !email || !phone || !date || !time) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
      }
  
      // Pretend to save to DB or process
      return res.status(200).json({ success: true });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  