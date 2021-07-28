export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'aaaa@aaaa.aaa',
      pass: 'aaaaaaaaa',
    },
    secure: true,
  })

  const mailData = {
    from: req.body.email,
    to: 'aaaaa@aa.aaa',
    subject: `Message From ${req.body.about}`,
    text: req.body.name + " | Sent from: " + req.body.email,
    html: `<div>adoption</div><p>Sent from:
    ${req.body.email}</p>`
  };

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  });

  res.status(200)

  console.log(req.body)
}