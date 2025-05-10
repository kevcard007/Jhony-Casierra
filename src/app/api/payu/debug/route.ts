// app/api/payu/debug/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Obtenemos todos los datos relevantes
    const apiKey = process.env.PAYU_API_KEY || '';
    const merchantId = process.env.PAYU_MERCHANT_ID || '';
    const accountId = process.env.PAYU_ACCOUNT_ID || '';
    const { reference, amount, description, buyerEmail } = body;
    
    // Cadena para la firma
    const stringToHash = `${apiKey}~${merchantId}~${reference}~${amount}~COP`;
    
    // Generamos la firma en MD5
    const signature = crypto
      .createHash('md5')
      .update(stringToHash)
      .digest('hex');
    
    // Creamos un objeto con todos los datos que se enviarían a PayU
    const payuData = {
      merchantId,
      accountId,
      description,
      referenceCode: reference,
      amount,
      tax: "0",
      taxReturnBase: "0",
      currency: "COP",
      signature,
      test: "1", // Ambiente de pruebas
      buyerEmail,
      responseUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/thank-you`,
      confirmationUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payu/confirmation`,
      // Mostramos también los datos usados para generar la firma
      debug: {
        originalString: stringToHash,
        apiKeyUsed: apiKey ? "***" + apiKey.substring(apiKey.length - 4) : "No API Key",
        merchantIdUsed: merchantId
      }
    };
    
    return NextResponse.json(payuData);
  } catch (error) {
    console.error('Error en la depuración:', error);
    return NextResponse.json(
      { error: 'Error en la depuración', details: error.message },
      { status: 500 }
    );
  }
}