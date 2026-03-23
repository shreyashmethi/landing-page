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

    // Add to audience list
    await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    // Send confirmation email
    const { error: emailError } = await resend.emails.send({
      from: 'samā4 <sama4.info@gmail.com>',
      to: email,
      subject: "You're on the samā4 waitlist",
      html: `
        <div style="background:#080808;color:#f0f0f0;font-family:'Inter',sans-serif;max-width:520px;margin:0 auto;padding:48px 40px;border-radius:8px;">
          <p style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#e8d5a3;margin:0 0 32px;">samā4</p>
          <h1 style="font-size:28px;font-weight:300;letter-spacing:-0.03em;margin:0 0 16px;">You're on the list.</h1>
          <p style="font-size:15px;font-weight:300;color:rgba(240,240,240,0.6);line-height:1.7;margin:0 0 32px;">
            Thanks for signing up for early access to samā4 — contextual news intelligence that helps you actually understand what you're reading.
          </p>
          <p style="font-size:15px;font-weight:300;color:rgba(240,240,240,0.6);line-height:1.7;margin:0 0 40px;">
            We'll reach out when your spot is ready.
          </p>
          <a href="https://sama4.online" style="font-family:'Courier New',monospace;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#080808;background:#e8d5a3;padding:10px 22px;border-radius:4px;text-decoration:none;">Visit sama4.online</a>
          <p style="margin-top:48px;font-size:12px;color:rgba(240,240,240,0.25);font-family:'Courier New',monospace;">© 2026 samā4</p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Email send error:', emailError);
      // Still return success — they're on the list even if email fails
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: err.message || 'Failed to subscribe. Please try again.' });
  }
};
