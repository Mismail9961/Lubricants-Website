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
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Work Email:</strong> ${workEmail}</p>
        <p><strong>Phone:</strong> ${phoneNumber || 'N/A'}</p>
        <p><strong>Address:</strong> ${address || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
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