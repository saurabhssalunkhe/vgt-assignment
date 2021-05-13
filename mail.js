const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '41386cf6cdc7222d14c9412c8ece9aa3-602cc1bf-5928a3ca',
        domain:'sandboxcdd6b62964e34cd49a83e0be27617052.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailgun(auth));


const sendMail = (email, subject, text, cb) => {
const mailOptions = {
    from: email,
    to: 'saurabhsalunkhe99@gmail.com',
    subject: subject,
    text: text
};

transporter.sendMail(mailOptions, function(err, data){
    if(err){
        cb(err, null);
    }
    else{
        cb(null, data);
    }
});

}

module.exports = sendMail;

