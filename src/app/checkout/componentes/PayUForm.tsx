// app/checkout/componentes/PayUForm.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface PayUFormProps {
  amount: number;
  productName: string;
  buyerName: string;
  buyerEmail: string;
  reference: string;
}

const PayUForm: React.FC<PayUFormProps> = ({
  amount,
  productName,
  buyerName,
  buyerEmail,
  reference
}) => {
  const [signature, setSignature] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: buyerName || '',
    email: buyerEmail || '',
    phone: '',
    address: '',
    city: ''
  });
  const router = useRouter();

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Función para depurar los datos de PayU
  const handleDebug = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/payu/debug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reference,
          amount,
          description: productName,
          buyerEmail: formData.email
        }),
      });
      
      const data = await response.json();
      console.log('Datos de depuración PayU:', data);
      alert('Revisa la consola para ver los datos de depuración');
    } catch (error) {
      console.error('Error de depuración:', error);
      alert('Error al depurar: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  };

  // Obtener la firma para PayU desde nuestra API
  useEffect(() => {
    const getSignature = async () => {
      setLoading(true);
      setError(null);
      
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
        
        if (!response.ok) {
          throw new Error('Error al generar la firma');
        }
        
        const data = await response.json();
        setSignature(data.signature);
      } catch (error) {
        console.error('Error al obtener la firma:', error);
        setError('No se pudo conectar con el servidor de pagos. Por favor, inténtalo de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    getSignature();
  }, [reference, amount]);

  if (loading) {
    return <div className="text-center py-10">Cargando formulario de pago...</div>;
  }
  
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Reintentar
        </button>
      </div>
    );
  }

  // Configuración de PayU
  const merchantId = process.env.NEXT_PUBLIC_PAYU_MERCHANT_ID || '';
  const accountId = process.env.NEXT_PUBLIC_PAYU_ACCOUNT_ID || '';
  const isProduction = process.env.NODE_ENV === 'production';
  const payuUrl = isProduction
    ? 'https://checkout.payulatam.com/ppp-web-gateway-payu/'
    : 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/';
  const responseUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/thank-you`;

  return (
    <div className="mt-6">
      <form action={payuUrl} method="post" className="space-y-4">
        {/* Campos requeridos por PayU */}
        <input type="hidden" name="merchantId" value={merchantId} />
        <input type="hidden" name="accountId" value={accountId} />
        <input type="hidden" name="description" value={productName} />
        <input type="hidden" name="referenceCode" value={reference} />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="tax" value="0" />
        <input type="hidden" name="taxReturnBase" value="0" />
        <input type="hidden" name="currency" value="COP" />
        <input type="hidden" name="signature" value={signature} />
        <input type="hidden" name="test" value={isProduction ? '0' : '1'} />
        <input type="hidden" name="buyerEmail" value={formData.email} />
        <input type="hidden" name="responseUrl" value={responseUrl} />
        <input type="hidden" name="confirmationUrl" value={`${process.env.NEXT_PUBLIC_SITE_URL}/api/payu/confirmation`} />

        {/* Información del comprador */}
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              required
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección de envío</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              required
            />
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              required
            />
          </div>
        </div>

        {/* Botón de depuración */}
        <button
          type="button" // Importante: type="button" para que no envíe el formulario
          onClick={handleDebug}
          className="w-full bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
        >
          Depurar Datos de PayU
        </button>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition duration-200"
        >
          Proceder al Pago
        </button>
      </form>
    </div>
  );
};

export default PayUForm;