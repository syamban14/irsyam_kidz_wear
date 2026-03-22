import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Stub for Midtrans/Xendit logic
    // In a real application, you would initialize the SDK and send the payload
    const mockTransactionToken = `mock_token_${Math.random().toString(36).substring(7)}`;
    const mockRedirectUrl = `https://mockpayment.com/pay/${mockTransactionToken}`;
    
    return NextResponse.json({
      success: true,
      token: mockTransactionToken,
      redirect_url: mockRedirectUrl
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Payment gateway error' },
      { status: 500 }
    );
  }
}
