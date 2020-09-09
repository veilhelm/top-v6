const User = require('../models/user.model');
const { transporter, verify, welcome } = require('../utils/mailer');

module.exports = {
  async signup(req, res) {
    const { email, name } = req.body;

    // verify(transporter)

    const mail = {
      from: `"${process.env.MAIL_USERNAME}" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Welcome',
      ...welcome(name)
    }

    await transporter.sendMail(mail)

    res.sendStatus(200)
  }
}
