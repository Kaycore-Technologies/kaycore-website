import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the form data (server-side confirmation)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(`Name: ${body.name}`);
    console.log(`Email: ${body.email}`);

    // Configure Email Transporter (Microsoft 365 / Outlook)
    // Note: User must verify 'nodemailer' is installed.
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Microsoft 365 Email
        pass: process.env.EMAIL_PASS, // Your Microsoft 365 Password or App Password
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    try {
      // Send notification to Admin (You)
      await transporter.sendMail({
        from: `"Kaycore Website" <${process.env.EMAIL_USER}>`,
        to: "admin@kaycore.com", // Destination email
        replyTo: body.email,
        subject: `[New Lead] ${body.subject} - from ${body.name}`,
        text: `
          New Contact Form Submission
          
          Name: ${body.name}
          Email: ${body.email}
          Subject: ${body.subject}
          
          Message:
          ${body.message}
          
          -----------------------------------
          Sent from kaycore.com contact form
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Subject:</strong> ${body.subject}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-left: 4px solid #007bff;">${body.message.replace(/\n/g, '<br>')}</p>
        `,
      });

      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // We don't fail the response here to allow the user to feel efficient, 
      // but you should monitor logs. Or uncomment the next line to error out.
      // throw emailError; 
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Form submission received',
        id: `contact-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET requests (not allowed for this endpoint)
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
