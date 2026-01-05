import { AzureFunction, Context, HttpRequest } from '@azure/functions';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  service?: string;
  recaptchaToken: string;
}

/**
 * Azure Function to handle contact form submissions
 * Validates reCAPTCHA and sends email via SendGrid
 */
const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('Contact form submission received');

  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 200,
      headers,
    };
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    context.res = {
      status: 405,
      headers,
      body: { error: 'Method not allowed' },
    };
    return;
  }

  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      context.res = {
        status: 400,
        headers,
        body: { error: 'Missing required fields' },
      };
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      context.res = {
        status: 400,
        headers,
        body: { error: 'Invalid email address' },
      };
      return;
    }

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(formData.recaptchaToken, context);
    if (!recaptchaValid) {
      context.res = {
        status: 400,
        headers,
        body: { error: 'reCAPTCHA verification failed' },
      };
      return;
    }

    // Send email via SendGrid
    await sendEmail(formData, context);

    context.res = {
      status: 200,
      headers,
      body: { success: true, message: 'Message sent successfully' },
    };
  } catch (error) {
    context.log.error('Error processing contact form:', error);
    context.res = {
      status: 500,
      headers,
      body: { error: 'Internal server error' },
    };
  }
};

/**
 * Verify reCAPTCHA token with Google
 */
async function verifyRecaptcha(token: string, context: Context): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    context.log.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    // Check if verification was successful and score is above threshold
    // reCAPTCHA v3 returns a score from 0.0 to 1.0 (1.0 is very likely a good interaction)
    const scoreThreshold = 0.5;
    const isValid = data.success && data.score >= scoreThreshold;

    context.log(`reCAPTCHA verification: ${isValid}, score: ${data.score}`);

    return isValid;
  } catch (error) {
    context.log.error('reCAPTCHA verification error:', error);
    return false;
  }
}

/**
 * Send email via SendGrid
 */
async function sendEmail(formData: ContactFormData, context: Context): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const toEmail = process.env.SENDGRID_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    throw new Error('SendGrid configuration missing');
  }

  // Prepare email content
  const subject = `New Contact Form Submission from ${formData.name}`;
  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0066cc;">New Contact Form Submission</h2>

        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
              <a href="mailto:${formData.email}" style="color: #0066cc;">${formData.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.company}</td>
          </tr>
          ${
            formData.phone
              ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.phone}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.service
              ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Service:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.service}</td>
          </tr>
          `
              : ''
          }
        </table>

        <h3 style="margin-top: 30px; color: #0066cc;">Message:</h3>
        <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #0066cc; white-space: pre-wrap;">
${formData.message}
        </div>

        <p style="margin-top: 30px; font-size: 12px; color: #666;">
          This email was sent from the Default Route Advisory contact form.
        </p>
      </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.service ? `Service: ${formData.service}` : ''}

Message:
${formData.message}

---
This email was sent from the Default Route Advisory contact form.
  `;

  // SendGrid API request
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: toEmail }],
          subject: subject,
        },
      ],
      from: { email: fromEmail, name: 'Default Route Advisory Website' },
      reply_to: { email: formData.email, name: formData.name },
      content: [
        {
          type: 'text/plain',
          value: textContent,
        },
        {
          type: 'text/html',
          value: htmlContent,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    context.log.error('SendGrid API error:', errorText);
    throw new Error('Failed to send email');
  }

  context.log('Email sent successfully via SendGrid');
}

export default httpTrigger;
