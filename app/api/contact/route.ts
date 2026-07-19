import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
interface ContactPayload {
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber: string;
  address: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { firstName, lastName, workEmail, phoneNumber, address, message } = body;

    // Basic server-side validation
    if (!firstName || !lastName || !workEmail || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify connection config (optional, helps surface config errors early)
    await transporter.verify();

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    // Escape basic HTML in user-supplied fields to avoid markup injection in the admin email
    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeWorkEmail = escapeHtml(workEmail);
    const safePhone = phoneNumber ? escapeHtml(phoneNumber) : null;
    const safeAddress = address ? escapeHtml(address) : null;
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const row = (label: string, value: string) => `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #edf0f3; vertical-align: top; width: 130px;">
                  <span style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: #8a94a6;">${label}</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #edf0f3; vertical-align: top;">
                  <span style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #1f2937;">${value}</span>
                </td>
              </tr>`;

    const html = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background-color:#f4f6f8;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:100%; background-color:#ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(16,24,40,0.08);">

            <!-- Header -->
            <tr>
              <td style="background-color:#111827; padding: 24px 32px;">
                <span style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #9ca3af;">Prime Corporate Website</span>
                <h1 style="margin: 6px 0 0; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 700; color: #ffffff;">New Contact Form Submission</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 28px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row('Name', `${safeFirstName} ${safeLastName}`)}
                  ${row('Work Email', `<a href="mailto:${safeWorkEmail}" style="color:#2563eb; text-decoration:none;">${safeWorkEmail}</a>`)}
                  ${safePhone ? row('Phone', safePhone) : ''}
                  ${safeAddress ? row('Address', safeAddress) : ''}
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding: 8px 32px 28px;">
                <span style="display:block; margin-bottom: 8px; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: #8a94a6;">Message</span>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border-radius: 8px; border: 1px solid #edf0f3;">
                  <tr>
                    <td style="padding: 16px 18px;">
                      <span style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #1f2937;">${safeMessage}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding: 0 32px 32px;">
                <a href="mailto:${safeWorkEmail}" style="display:inline-block; background-color:#111827; color:#ffffff; text-decoration:none; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; padding: 12px 20px; border-radius: 8px;">Reply to ${safeFirstName}</a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 16px 32px; background-color:#f9fafb; border-top: 1px solid #edf0f3;">
                <span style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size: 12px; color: #9ca3af;">This message was sent from the contact form on your website.</span>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    await transporter.sendMail({
      from: `"Prime Corporate Website" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      replyTo: workEmail,
      subject: `New Contact Form Submission — ${firstName} ${lastName}`,
      text: `
New contact form submission:

Name: ${firstName} ${lastName}
Work Email: ${workEmail}
Phone: ${phoneNumber || 'N/A'}
Address: ${address || 'N/A'}

Message:
${message}
      `.trim(),
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}