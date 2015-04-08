var debug = require('debug')('transporter');
var config = require('../config');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

exports.send = function (email) {
    debug('sending email : ', email);

    transporter.sendMail(email);
};
