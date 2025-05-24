// components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hola, tengo una pregunta sobre..."
}) => {
  // Eliminar cualquier caracter no numérico del número de teléfono
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Crear la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl} 
      className="fixed bottom-5 right-5 bg-[#25D366] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg z-50 hover:bg-[#20ba5a] transition-transform hover:scale-105 hover:shadow-xl"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden md:inline font-medium">¿Necesitas ayuda?</span>
    </a>
  );
};

export default WhatsAppButton;