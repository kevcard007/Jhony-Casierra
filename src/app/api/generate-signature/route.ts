// src/app/api/generate-signature/route.ts

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    amount,
    currency,
    reference,
    user_id,
    url_response,
    url_confirmation,
    shop_id,
  } = body;

  // Llave secreta desde .env.local
  const integrity = process.env.BEPAY_SECRET_KEY ?? "";

  // Cadena que se firma (en orden)
  const rawSignature = `${amount}|${currency}|${reference}|${integrity}|${user_id}|${url_response}|${url_confirmation}|${shop_id}`;

  // Firma en SHA-256
  const signature = crypto.createHash("sha256").update(rawSignature).digest("hex");
  const token = "TOKEN_SIMULADO_" + Math.random().toString(36).substring(2, 10);
  return NextResponse.json({ 
        signature, 
        reference,
        token,
    });
}
