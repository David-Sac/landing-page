// components/email-template.tsx
import * as React from 'react';

interface EmailTemplateProps {
  nombre: string;
  email: string;
  mensaje: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  email,
  mensaje,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
    <h1>Nuevo Mensaje desde Mi Landing Page</h1>
    <p><strong>Nombre:</strong> {nombre}</p>
    <p><strong>Correo Electrónico:</strong> {email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{mensaje}</p>
  </div>
);
