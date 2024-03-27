const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require("dotenv").config();

const nodeConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js",
  },
});
const registerEmail = async (req, res) => {
  const { username, userEmail, text, subject } = req.body;

  //body of email
  var email = {
    body: {
      name: username,
      intro:
        text || "Welcome to Mailgen! We're very excited to have you on board.",
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
  var emailbody = MailGenerator.generate(email);
  let message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: subject || "Signup successfully",
    html: emailbody,
  };
  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .send({ msg: "You shold receive an email from us" });
    })
    .catch((error) => res.status(500).send({ error }));
};
module.exports = registerEmail;
