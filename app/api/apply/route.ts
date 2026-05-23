import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const position = formData.get('position') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File | null;

    // Validate required fields
    if (!name || !email || !position || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields (Name, Email, Position, Resume)' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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

    // Read the resume file as a Buffer for attachment
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    try {
      // Send notification to Admin (You)
      const info = await transporter.sendMail({
        from: `"Kaycore Careers" <${process.env.EMAIL_USER || 'test@ethereal.email'}>`,
        to: "admin@kaycore.com",
        replyTo: email,
        subject: `[Job Application] ${position} - ${name}`,
        text: `
          New Job Application Received
          
          Name: ${name}
          Email: ${email}
          Position: ${position}
          
          Cover Letter / Notes:
          ${coverLetter || 'Not specified'}
          
          -----------------------------------
          Sent from kaycore.com careers form
        `,
        html: `
          <h3>New Job Application Received</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Position:</strong> ${position}</p>
          <hr/>
          <p><strong>Cover Letter / Notes:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-left: 4px solid #007bff;">
            ${(coverLetter || 'Not specified').replace(/\n/g, '<br>')}
          </p>
          <br/>
          <p><em>The applicant's resume is attached to this email.</em></p>
        `,
        attachments: [
          {
            filename: resume.name,
            content: buffer,
          }
        ]
      });

      console.log('Application email sent successfully');
      if (isTestMode) {
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      }
    } catch (emailError: any) {
      console.error('Failed to send application email:', emailError);
      return NextResponse.json(
        { error: `Email delivery failed: ${emailError.message}` },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Application received successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
