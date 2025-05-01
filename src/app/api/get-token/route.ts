// src/app/api/get-token/route.ts

import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch('https://stage.bepay.net.co/api/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'kevin.cardona@bemovil.net',
        password: 'Migra0000??'
      })
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');

    if (!isJson) {
      const text = await response.text();
      console.error('⚠️ Expected JSON, but got:', text.slice(0, 300));
      return NextResponse.json({ error: 'Respuesta inválida desde el endpoint de token de BePay' }, { status: 500 });
    }

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error_description || 'Error al obtener el token' },
        { status: response.status }
      );
    }

    return NextResponse.json({ access_token: data.access_token });
  } catch (error) {
    console.error('Error al obtener el token:', error);
    return NextResponse.json({ error: 'Error interno al obtener el token' }, { status: 500 });
  }
}
