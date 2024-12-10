const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tu-email@gmail.com', // Cambia por tu correo de Gmail
    pass: 'tu-contraseña-de-aplicación', // Contraseña de aplicación de Gmail
  },
});

// Ruta para manejar el envío de correos
app.post('/send', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const mailOptions = {
    from: 'tu-email@gmail.com',
    to: 'tu-email@gmail.com',
    subject: `Nuevo mensaje de contacto de ${nombre}`,
    text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo.');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado exitosamente.');
    }
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
