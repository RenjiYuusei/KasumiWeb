import { NextRequest, NextResponse } from 'next/server';

// Mock database - in production, use a real database
const verifiedCodes = new Set<string>();

function generateResetCommand(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    // Validation
    if (!code || typeof code !== 'string' || code.length < 10) {
      return NextResponse.json(
        { error: 'Invalid verification code' },
        { status: 400 }
      );
    }

    // Check if code was already verified
    if (verifiedCodes.has(code)) {
      return NextResponse.json(
        { error: 'Code already verified' },
        { status: 409 }
      );
    }

    // In production, you would:
    // 1. Query database for the code
    // 2. Check if code is expired
    // 3. Mark code as used
    // 4. Log the verification

    // Simulate verification by accepting any reasonable code
    const resetCommand = generateResetCommand();
    verifiedCodes.add(code);

    console.log(`[Kasumi] Code verified: ${code}, Reset: ${resetCommand}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Code verified successfully',
        resetCommand,
      },
      { status: 200 }
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
