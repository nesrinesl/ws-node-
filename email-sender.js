var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'slama9082@gmail.com',
    pass: 'ezap pagd jpxx garf'
  }
});

var mailOptions = {
  from: 'slama9082@gmail.com',
  to: 'slama9082@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});