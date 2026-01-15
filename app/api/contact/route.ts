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

    // Log the form data (in production, you would save to database or send email)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(`Name: ${body.name}`);
    console.log(`Email: ${body.email}`);
    console.log(`Subject: ${body.subject}`);
    console.log(`Message: ${body.message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log('===================================\n');

    // TODO: In a real application, you would:
    // 1. Save the form data to a database
    // 2. Send a confirmation email to the user
    // 3. Send a notification email to the admin
    // 4. Integrate with a CRM or ticketing system

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
