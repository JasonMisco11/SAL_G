import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    // 1. Configure the Transporter
    // NOTE: In production, use process.env.GMAIL_USER and process.env.GMAIL_PASS
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'safinteriorlimited@gmail.com', // Your Email
        pass: process.env.GMAIL_APP_PASSWORD, // Your App Password (create env variable later)
      },
    });

    // 2. Define Email Options
    const mailOptions = {
      from: email, // Sender's address (from the form)
      to: 'safinteriorlimited@gmail.com', // Your receiving address
      subject: `New Booking Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service Interest: ${service}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Booking Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}