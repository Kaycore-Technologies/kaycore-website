/**
 * Contact Form API Route
 * 
 * Handles form submissions from the contact page
 * Validates input, logs submissions, and sends response
 * 
 * @route POST /api/contact
 * @param {Object} request - NextRequest object
 * @returns {Promise<NextResponse>} Success or error response
 * 
 * @example
 * // Request body
 * {
 *   "name": "John Doe",
 *   "email": "john@example.com",
 *   "subject": "Inquiry",
 *   "message": "I would like to learn more about your services"
 * }
 * 
 * // Success response (200)
 * {
 *   "success": true,
 *   "message": "Form submission received",
 *   "id": "contact-1702000000000"
 * }
 * 
 * // Error responses
 * 400: Missing required fields
 * 400: Invalid email format
 * 405: Method not allowed
 * 500: Internal server error
 */
import { NextRequest, NextResponse } from 'next/server';
import { validateRequired, isValidEmail } from '@/lib/api/helpers';

/**
 * Contact form data interface
 * All fields required for submission
 */
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Handle POST requests to contact form endpoint
 * 
 * Validates all required fields:
 * - name (required, non-empty)
 * - email (required, valid email format)
 * - subject (required, non-empty)
 * - message (required, non-empty)
 * 
 * On success: Logs submission and returns confirmation
 * On failure: Returns 400 status with error message
 * 
 * @param {NextRequest} request - The incoming request
 * @returns {Promise<NextResponse>} Response with status and data
 * 
 * TODO: Production implementation should:
 * 1. Save form data to database
 * 2. Send confirmation email to user
 * 3. Send notification email to admin
 * 4. Integrate with CRM or ticketing system
 * 5. Implement rate limiting
 * 6. Add spam detection (Honeypot, reCAPTCHA)
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and type the request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    const requiredErrors = validateRequired(body as unknown as Record<string, unknown>, ['name', 'email', 'subject', 'message']);
    if (!requiredErrors.isValid) {
      return NextResponse.json(
        {
          error: 'Missing required fields: ' + requiredErrors.missingFields.join(', '),
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log submission for debugging/monitoring
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(`Name: ${body.name}`);
    console.log(`Email: ${body.email}`);
    console.log(`Subject: ${body.subject}`);
    console.log(`Message: ${body.message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log('===================================\n');

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

/**
 * Handle unsupported HTTP methods
 * Only POST allowed for this endpoint
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
