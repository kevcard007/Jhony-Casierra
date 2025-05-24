import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // HTML content para el PDF
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Política de Privacidad - Jhony Casierra</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #000;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          font-size: 28px;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }
        .header p {
          color: #666;
          margin: 5px 0;
        }
        .section {
          margin-bottom: 25px;
        }
        .section h2 {
          font-size: 20px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 15px;
        }
        .section h3 {
          font-size: 16px;
          margin-bottom: 10px;
          color: #444;
        }
        .section p {
          margin-bottom: 12px;
          text-align: justify;
        }
        .section ul {
          padding-left: 20px;
          margin-bottom: 15px;
        }
        .section li {
          margin-bottom: 5px;
        }
        .contact-box {
          background-color: #f5f5f5;
          border-left: 4px solid #000;
          padding: 15px;
          margin: 20px 0;
        }
        .contact-box p {
          margin: 5px 0;
        }
        .footer {
          text-align: center;
          border-top: 1px solid #ccc;
          padding-top: 20px;
          margin-top: 40px;
          color: #666;
          font-size: 12px;
        }
        strong {
          font-weight: bold;
        }
        @media print {
          body { margin: 0; padding: 15px; }
          .header { page-break-after: avoid; }
          .section { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>POLÍTICA DE PRIVACIDAD</h1>
        <p><strong>Jhony Casierra - Arte Contemporáneo</strong></p>
        <p>Última actualización: ${new Date().toLocaleDateString('es-ES', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>

      <div class="section">
        <h2>1. INTRODUCCIÓN</h2>
        <p>
          En Jhony Casierra Arte Contemporáneo, respetamos su privacidad y nos comprometemos a proteger 
          sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos 
          personales cuando visita nuestro sitio web y le contará sobre sus derechos de privacidad y 
          cómo la ley lo protege.
        </p>
        <div class="contact-box">
          <p><strong>Datos de contacto:</strong></p>
          <p>Jhony Casierra</p>
          <p>Email: info@jhonycasierra.com</p>
          <p>Teléfono: +57 318 221 8211</p>
          <p>Sitio web: www.jhonycasierra.com</p>
        </div>
      </div>

      <div class="section">
        <h2>2. DATOS QUE RECOPILAMOS</h2>
        <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted:</p>
        
        <h3>2.1 Datos de identidad</h3>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Título o tratamiento</li>
          <li>Fecha de nacimiento</li>
        </ul>

        <h3>2.2 Datos de contacto</h3>
        <ul>
          <li>Dirección de facturación</li>
          <li>Dirección de entrega</li>
          <li>Dirección de correo electrónico</li>
          <li>Números de teléfono</li>
        </ul>

        <h3>2.3 Datos técnicos</h3>
        <ul>
          <li>Dirección del protocolo de Internet (IP)</li>
          <li>Datos de inicio de sesión</li>
          <li>Tipo y versión del navegador</li>
          <li>Configuración de zona horaria y ubicación</li>
          <li>Tipos y versiones de complementos del navegador</li>
          <li>Sistema operativo y plataforma</li>
        </ul>
      </div>

      <div class="section">
        <h2>3. CÓMO USAMOS SUS DATOS</h2>
        <p>Utilizamos sus datos personales para:</p>
        <ul>
          <li>Procesar y entregar su pedido, incluyendo el manejo de pagos y entregas</li>
          <li>Gestionar su cuenta y proporcionar servicio al cliente</li>
          <li>Enviarle información sobre productos y servicios que puedan interesarle</li>
          <li>Mejorar nuestro sitio web, productos/servicios y experiencia del cliente</li>
          <li>Cumplir con obligaciones legales y regulatorias</li>
          <li>Proteger nuestro negocio y este sitio web de fraude</li>
        </ul>
      </div>

      <div class="section">
        <h2>4. COOKIES</h2>
        <p>
          Nuestro sitio web utiliza cookies para distinguirle de otros usuarios de nuestro sitio web. 
          Esto nos ayuda a brindarle una buena experiencia cuando navega por nuestro sitio web y también 
          nos permite mejorar nuestro sitio.
        </p>
        
        <h3>4.1 Tipos de cookies que utilizamos:</h3>
        <ul>
          <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio web</li>
          <li><strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo interactúa con nuestro sitio</li>
          <li><strong>Cookies de funcionalidad:</strong> Nos permiten recordar las opciones que hace</li>
          <li><strong>Cookies de marketing:</strong> Utilizadas para entregar anuncios más relevantes</li>
        </ul>
      </div>

      <div class="section">
        <h2>5. COMPARTIR SUS DATOS</h2>
        <p>
          No vendemos, intercambiamos o transferimos de otra manera a terceros su información personal 
          identificable. Esto no incluye a terceros de confianza que nos ayudan a operar nuestro sitio 
          web, llevar a cabo nuestro negocio o brindarle servicios, siempre que esas partes acuerden 
          mantener esta información confidencial.
        </p>
        
        <h3>5.1 Podemos compartir sus datos con:</h3>
        <ul>
          <li>Procesadores de pagos (como PayPal, Stripe)</li>
          <li>Servicios de entrega y logística</li>
          <li>Proveedores de servicios de marketing y publicidad</li>
          <li>Proveedores de servicios de análisis web</li>
          <li>Asesores profesionales como abogados y contadores</li>
        </ul>
      </div>

      <div class="section">
        <h2>6. SUS DERECHOS LEGALES</h2>
        <p>Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos sobre sus datos personales:</p>
        
        <ul>
          <li><strong>Derecho de acceso:</strong> Solicitar copias de sus datos personales</li>
          <li><strong>Derecho de rectificación:</strong> Solicitar que corrijamos cualquier información que crea que es inexacta</li>
          <li><strong>Derecho de supresión:</strong> Solicitar que eliminemos sus datos personales</li>
          <li><strong>Derecho de restricción:</strong> Solicitar que restrinjamos el procesamiento de sus datos personales</li>
          <li><strong>Derecho de portabilidad:</strong> Solicitar que transfiramos sus datos a otra organización</li>
          <li><strong>Derecho de oposición:</strong> Oponerse al procesamiento de sus datos personales</li>
        </ul>
      </div>

      <div class="section">
        <h2>7. CONTACTO</h2>
        <p>
          Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, 
          contáctenos en:
        </p>
        <div class="contact-box">
          <p><strong>Jhony Casierra</strong></p>
          <p>Email: info@jhonycasierra.com</p>
          <p>Teléfono: +57 318 221 8211</p>
          <p>WhatsApp: +57 318 221 8211</p>
          <p>Sitio web: www.jhonycasierra.com</p>
        </div>
      </div>

      <div class="footer">
        <p>© ${new Date().getFullYear()} Jhony Casierra - Arte Contemporáneo. Todos los derechos reservados.</p>
        <p>Documento generado el ${new Date().toLocaleDateString('es-ES')} a las ${new Date().toLocaleTimeString('es-ES')}</p>
        <p>Guadalajara de Buga, Colombia</p>
      </div>
    </body>
    </html>
    `;

    return new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      },
    });

  } catch (error) {
    console.error('Error generating privacy policy:', error);
    return NextResponse.json(
      { error: 'Error al generar la política de privacidad' },
      { status: 500 }
    );
  }
}