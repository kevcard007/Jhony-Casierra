// app/api/generate-signature/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reference, amount } = body;
    
    // Obtén tus claves de las variables de entorno
    const apiKey = process.env.PAYU_API_KEY;
    const merchantId = process.env.PAYU_MERCHANT_ID;
    
    // La cadena a firmar tiene este formato: apiKey~merchantId~referenceCode~amount~currency
    const stringToHash = `${apiKey}~${merchantId}~${reference}~${amount}~COP`;
    
    // Generar la firma en MD5
    const signature = crypto
      .createHash('md5')
      .update(stringToHash)
      .digest('hex');
    
    return NextResponse.json({ signature });
  } catch (error) {
    console.error('Error generando la firma:', error);
    return NextResponse.json(
      { error: 'Error generando la firma' },
      { status: 500 }
    );
  }
}
