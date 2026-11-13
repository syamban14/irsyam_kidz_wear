import { NextResponse } from 'next/server';

interface CheckoutPayload {
  items?: Array<{ id: string; name: string; price: number; quantity: number }>;
  amount?: number;
  customer?: {
    name?: string;
    phone?: string;
    address?: string;
    notes?: string;
  };
  shippingMethod?: 'reguler' | 'instan';
  paymentMethod?: 'qris' | 'va';
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CheckoutPayload;

    if (!body.items || body.items.length === 0 || !body.amount || body.amount <= 0) {
      return NextResponse.json(
        { success: false, message: 'Keranjang belanja masih kosong atau nominal tidak valid.' },
        { status: 400 }
      );
    }

    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const orderId = `IKW-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-${randomCode}`;
    const paymentMethodLabel =
      body.paymentMethod === 'va' ? 'Transfer Bank Virtual Account' : 'QRIS Instan';
    const shippingLabel =
      body.shippingMethod === 'instan' ? 'Kurir Instan (Hari Ini)' : 'Reguler (1–3 Hari Kerja)';

    return NextResponse.json({
      success: true,
      token: orderId,
      paymentMethod: paymentMethodLabel,
      shippingMethod: shippingLabel,
      customerName: body.customer?.name || 'Bunda Pelanggan',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Gagal memproses permintaan pembayaran.' },
      { status: 500 }
    );
  }
}
