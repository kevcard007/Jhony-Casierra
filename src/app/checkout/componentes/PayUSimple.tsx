// app/checkout/componentes/payUSimple.tsx
"use client";

import React, { useEffect, useState } from 'react';

interface PayUSimpleProps {
  amount: number;
  productName: string;
  reference: string;
}

const PayUSimple: React.FC<PayUSimpleProps> = ({
  amount,
  productName,
  reference
}) => {
  const [signature, setSignature] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Obtener la firma para PayU
  useEffect(() => {
    const getSignature = async () => {
      try {
        const response = await fetch('/api/payu/signature', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            reference,
            amount,
          }),
        });
        
        const data = await response.json();
        setSignature(data.signature);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener la firma:', error);
      }
    };

    getSignature();
  }, [reference, amount]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  // Valores fijos para pruebas
  const merchantId = "1023900";  // Tu Merchant ID
  const accountId = "1033041";   // Tu Account ID
  const buyerEmail = "test@example.com";  // Un email fijo para pruebas
  const responseUrl = "http://localhost:3000/checkout/thank-you";  // URL de respuesta

  return (
    <div>
      <h3>Formulario mínimo de PayU (Prueba)</h3>
      <form
        action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
        method="post"
        target="_blank"
      >
        <input name="merchantId" type="hidden" value={merchantId} />
        <input name="accountId" type="hidden" value={accountId} />
        <input name="description" type="hidden" value={productName} />
        <input name="referenceCode" type="hidden" value={reference} />
        <input name="amount" type="hidden" value={amount} />
        <input name="tax" type="hidden" value="0" />
        <input name="taxReturnBase" type="hidden" value="0" />
        <input name="currency" type="hidden" value="COP" />
        <input name="signature" type="hidden" value={signature} />
        <input name="test" type="hidden" value="1" />
        <input name="buyerEmail" type="hidden" value={buyerEmail} />
        <input name="responseUrl" type="hidden" value={responseUrl} />
        <input name="confirmationUrl" type="hidden" value="http://localhost:3000/api/payu/confirmation" />
        
        <p>Monto: ${amount.toLocaleString('es-CO')}</p>
        <p>Producto: {productName}</p>
        <p>Referencia: {reference}</p>
        
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md"
        >
          Proceder al Pago (Prueba Mínima)
        </button>
      </form>
      
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">Datos de depuración:</p>
        <ul className="text-xs text-gray-500">
          <li>merchantId: {merchantId}</li>
          <li>accountId: {accountId}</li>
          <li>description: {productName}</li>
          <li>referenceCode: {reference}</li>
          <li>amount: {amount}</li>
          <li>currency: COP</li>
          <li>signature: {signature}</li>
          <li>test: 1</li>
          <li>buyerEmail: {buyerEmail}</li>
        </ul>
      </div>
    </div>
  );
};

export default PayUSimple;