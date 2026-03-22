import { NextRequest, NextResponse } from 'next/server';

// Mock database - in production, use a real database
const subscribers = new Map<string, { email: string; code: string; timestamp: number }>();

function generateVerificationCode(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    if (subscribers.has(email)) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Generate verification code
    const code = generateVerificationCode();
    
    // Store subscriber (in production, save to database)
    subscribers.set(email, {
      email,
      code,
      timestamp: Date.now(),
    });

    // In production, you would:
    // 1. Send verification email with code
    // 2. Store in database
    // 3. Log the subscription

    console.log(`[Kasumi] New subscriber: ${email}, Code: ${code}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Subscription successful. Check your email for verification.',
        code, // In production, don't return the code in the response
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[Kasumi API Error]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
