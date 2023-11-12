import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Informacion del email

  const info = await transport.sendMail({
    from: '"UniProjects - Project Administrator" <cuentas@uptask.com>',
    to: email,
    subject: "UniProjects - Confirm your Account",
    text: "Confirm your Account in UniProjects",
    html: `<p>Hi: ${nombre} Confirm your account in UniProjects</p>
    <p>Your account is almost done, just need to be confirmed by using the following link: 

    <a href="${process.env.FRONTEND2_URL}/confirmar/${token}">Confirm Account</a>

    <p>If you did not create this account, please ignore this email</p>
    
    
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Informacion del email

  const info = await transport.sendMail({
    from: '"UniProjects - Project Administrator" <cuentas@uptask.com>',
    to: email,
    subject: "UniProjects - Reset your Password",
    text: "Reset your Password",
    html: `<p>Hi: ${nombre} youu have requested to reset your Password</p>

    <p>Click the following link to create your new Password: 

    <a href="${process.env.FRONTEND2_URL}/olvide-password/${token}">Reset Password</a>

    <p>If you did not create this account, please ignore this email</p>
    
    
    `,
  });
};
