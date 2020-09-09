const nodemailer = require('nodemailer');

module.exports = {
  transporter: nodemailer.createTransport({
    host: 'smtp.aol.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  }),
  welcome(name) {
    return {
      html: `
        <body>
          <h1>Mailer App</h1>
          <h2>Welcome ${name}</h2>
        </body>
      `,
      text: `Mailer App\n\nWelcome ${name}`
    }
  },
  async verify(transporter) {
    const isConnected = await transporter.verify()
    console.log('Server is ready to take our messages', isConnected)
  }
}
