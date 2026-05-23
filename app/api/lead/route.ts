import { NextRequest, NextResponse } from 'next/server';

interface LeadFormData {
  name: string;
  email: string;
  company?: string;
  challenges?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email) {
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

    // Configure Email Transporter (Microsoft 365 / Outlook)
    const nodemailer = require('nodemailer');

    let transporter;
    let isTestMode = false;

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // TLS
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          ciphers: 'SSLv3'
        }
      });
    } else if (process.env.NODE_ENV === 'development') {
      console.log('Using Ethereal Email for local testing');
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      isTestMode = true;
    } else {
      console.error('Server Error: Missing email configuration (EMAIL_USER or EMAIL_PASS)');
      return NextResponse.json(
        { error: 'Server configuration error: Email credentials not set.' },
        { status: 500 }
      );
    }

    try {
      // Send notification to Admin (You)
      const info = await transporter.sendMail({
        from: `"Kaycore Lead Capture" <${process.env.EMAIL_USER || 'test@ethereal.email'}>`,
        to: "admin@kaycore.com",
        replyTo: body.email,
        subject: `[Quick Lead] New inquiry from ${body.name}`,
        text: `
          New Quick Lead Captured
          
          Name: ${body.name}
          Email: ${body.email}
          Company: ${body.company || 'Not specified'}
          
          Challenges/Notes:
          ${body.challenges || 'Not specified'}
          
          -----------------------------------
          Sent from kaycore.com lead form
        `,
        html: `
          <h3>New Quick Lead Captured</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Company:</strong> ${body.company || 'Not specified'}</p>
          <hr/>
          <p><strong>Challenges/Notes:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-left: 4px solid #007bff;">
            ${(body.challenges || 'Not specified').replace(/\n/g, '<br>')}
          </p>
        `,
      });

      console.log('Lead email sent successfully');
      if (isTestMode) {
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      }
    } catch (emailError: any) {
      console.error('Failed to send lead email:', emailError);
      return NextResponse.json(
        { error: `Email delivery failed: ${emailError.message}` },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Lead received successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead form:', error);
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
