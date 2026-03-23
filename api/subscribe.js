const { Resend } = require('resend');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not set' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: error.message || 'Failed to subscribe' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: err.message || 'Failed to subscribe. Please try again.' });
  }
};
