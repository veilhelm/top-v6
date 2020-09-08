const nodemailer = require('nodemailer');

async function main() {
  let account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    }
  });

  // const status = await transporter.verify()
  // console.log(status)

  const user = {
    email: 'maria@test.com',
    name: 'Maria'
  }

  const styles = {
    container: 'background-color: #aeaeae; border: 1px solid #333'
  }

  const info = await transporter.sendMail({
    from: '"Simón Hoyos" <simon@test.com>',
    to: user.email,
    subject: 'Hello world',
    html: `
      <div style="${styles.container}"}>
        <h1>Hola ${user.names}</h1>
        <p>lorem ipsum dolor sit amet</p>
        <img src="https://www.linuxbabe.com/wp-content/uploads/2019/04/Enable-SMTPS-Port-465-in-Postfix-SMTP-Server.png">
      </div>
    `,
    text: `Hola ${user.name},\n\nlorem ipsum dolor sit amet\n\n\thttps://...`
  })

  console.log(nodemailer.getTestMessageUrl(info))
}

main()

