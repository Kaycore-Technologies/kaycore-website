import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface LeadFormData {
  name: string;
  email: string;
  company?: string;
  challenges?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

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

    if (!process.env.RESEND_API_KEY) {
      console.error('Server Error: Missing RESEND_API_KEY');
      return NextResponse.json(
        { error: 'Server configuration error: Email service not configured.' },
        { status: 500 }
      );
    }

    try {
      // Send notification to Admin via Resend
      const { data, error } = await resend.emails.send({
        from: 'Kaycore Leads <admin@kaycore.com>',
        to: ['admin@kaycore.com'],
        replyTo: body.email,
        subject: `[Lead] New inquiry from ${body.name}`,
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

      if (error) {
        throw new Error(error.message);
      }

      console.log('Lead email sent successfully via Resend:', data);
    } catch (emailError: any) {
      console.error('Failed to send lead email via Resend:', emailError);
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
