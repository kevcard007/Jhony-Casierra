// app/api/payu/confirmation/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extraer datos importantes
    const referenceCode = formData.get('reference_sale');
    const transactionState = formData.get('state_pol');
    const transactionId = formData.get('transaction_id');
    const paymentMethod = formData.get('payment_method_type');
    const amount = formData.get('value');
    
    console.log('Confirmación de pago recibida:', {
      referenceCode,
      transactionState,
      transactionId,
      paymentMethod,
      amount
    });
    
    // Aquí deberías verificar la firma para asegurarte de que la notificación es genuina
    // y actualizar tu base de datos con el estado del pago
    
    // Ejemplo de verificación de estado
    if (transactionState === '4') {
      // Pago aprobado
      // Actualizar el estado del pedido en tu base de datos
      console.log('Pago aprobado para referencia:', referenceCode);
    } else if (transactionState === '6' || transactionState === '5') {
      // Pago rechazado o expirado
      console.log('Pago rechazado para referencia:', referenceCode);
    } else {
      // Otros estados
      console.log('Estado de pago:', transactionState, 'para referencia:', referenceCode);
    }
    
    // PayU espera recibir un código HTTP 200 para confirmar la recepción
    return new NextResponse('OK', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    
  } catch (error) {
    console.error('Error procesando la confirmación de pago:', error);
    return new NextResponse('Error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}