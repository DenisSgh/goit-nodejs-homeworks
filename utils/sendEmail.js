const sgMail = require('@sendgrid/mail')

const { SENDGRID_KEY } = process.env
sgMail.setApiKey(SENDGRID_KEY)

const sendEmail = ({ email, verifyToken }) => {
  const mail = {
    to: email,
    from: 'denis.darkrgd@gmail.com',
    subject: 'Verify your email',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verifyToken}">Please, verify your email to use our services</a>`,
  }

  sgMail.send(mail)
}

module.exports = sendEmail
