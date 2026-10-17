import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { screenSubmission, spamNoticeHtml, spamNoticeText, SPAM_SUBJECT_TAG, type GuardFields } from '@/lib/spam-guard';
import { sanitizeInput } from '@/lib/validation';

interface ContactFormData extends GuardFields {
  name: string;
  email: string;
  company?: string;
  useCase: string;
  situation?: string;
  timeline: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Suspected spam is still emailed, tagged, so a real enquiry is never lost. Only floods are
    // dropped, and they get the normal success response so bots learn nothing.
    const verdict = await screenSubmission(request, body, {
      route: 'contact',
      minMs: 3000,
      name: body.name,
      email: body.email,
      texts: [body.useCase, body.message],
    });
    if (verdict.action === 'drop') {
      console.warn(`[spam-guard] dropped /api/contact submission: ${verdict.reason}`);
      return NextResponse.json(
        { success: true, message: 'Form submission received', id: `contact-${Date.now()}` },
        { status: 200 }
      );
    }
    const spamReason = verdict.action === 'quarantine' ? verdict.reason : null;
    if (spamReason) console.warn(`[spam-guard] flagged /api/contact submission: ${spamReason}`);

    // Validate required fields
    if (!body.name || !body.email || !body.useCase || !body.timeline || !body.message) {
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
      // Visitor input is escaped before it goes into the HTML email, so nobody can inject
      // links or markup into the notification.
      const h = {
        name: sanitizeInput(String(body.name ?? '')),
        email: sanitizeInput(String(body.email ?? '')),
        company: sanitizeInput(String(body.company ?? '')),
        useCase: sanitizeInput(String(body.useCase ?? '')),
        situation: sanitizeInput(String(body.situation ?? '')),
        timeline: sanitizeInput(String(body.timeline ?? '')),
        message: sanitizeInput(String(body.message ?? '')),
      };
      const oneLine = (v: unknown) => String(v ?? '').replace(/[\r\n]+/g, ' ').slice(0, 150);

      const { data, error } = await resend.emails.send({
        from: 'Kaycore Website <admin@kaycore.com>',
        to: ['admin@kaycore.com'],
        replyTo: body.email,
        subject: `${spamReason ? `${SPAM_SUBJECT_TAG} ` : ''}[New Lead] ${oneLine(body.useCase)} - from ${oneLine(body.name)}`,
        // The X-Spam-* headers follow the SpamAssassin convention, so any mail rule or filter can match them.
        headers: spamReason ? { 'X-Spam-Flag': 'YES', 'X-Spam-Status': `Yes, reason=${spamReason}` } : undefined,
        text: `${spamReason ? spamNoticeText(spamReason) : ''}
          New Contact Form Submission
          
          Name: ${body.name}
          Email: ${body.email}
          Company: ${body.company || 'Not specified'}
          Use Case: ${body.useCase}
          Service: ${body.situation || 'Not specified'}
          Timeline: ${body.timeline}
          
          Message:
          ${body.message}
          
          -----------------------------------
          Sent from kaycore.com contact form
        `,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            ${spamReason ? spamNoticeHtml(spamReason) : ''}
            <h2 style="color: #030712; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">📫 New Contact Form Submission</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; width: 140px;"><strong>Name:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${h.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${h.email}" style="color: #2563eb; text-decoration: none;">${h.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Company:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${h.company || '<span style="color: #9ca3af; font-style: italic;">Not specified</span>'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Use Case:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><span style="background-color: #e0e7ff; color: #3730a3; padding: 4px 10px; border-radius: 9999px; font-size: 13px; font-weight: 500;">${h.useCase}</span></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Timeline:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${h.timeline}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Service:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${h.situation || '<span style="color: #9ca3af; font-style: italic;">Not specified</span>'}</td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <strong style="display: block; margin-bottom: 10px; color: #4b5563;">Message Details:</strong>
              <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 0 8px 8px 0; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #1e293b;">${h.message}</div>
            </div>
            
            <p style="margin-top: 40px; font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 20px;">
              This email was automatically generated by the Kaycore Technologies website.
            </p>
          </div>
        `,
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log('Email sent successfully via Resend:', data);
    } catch (emailError: any) {
      console.error('Failed to send email via Resend:', emailError);
      return NextResponse.json(
        { error: `Email delivery failed: ${emailError.message}` },
        { status: 500 }
      );
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
