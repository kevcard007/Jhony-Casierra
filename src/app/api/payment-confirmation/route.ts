// app/api/payment-confirmation/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Obtener los datos de la solicitud
    const data = await req.json();
    
    // Aquí procesarías la confirmación del pago
    // 1. Verificar la autenticidad de la notificación
    // 2. Actualizar el estado del pedido en tu base de datos
    // 3. Enviar confirmación por email, etc.
    
    console.log('Confirmación de pago recibida:', data);
    
    // Guarda estos datos en tu base de datos
    // Ejemplo: await db.orders.update({ reference: data.reference, status: 'paid' })
    
    // BePay espera un código 200 sin contenido para confirmar recepción
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('Error al procesar la confirmación de pago:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}