var debug = require('debug')('api');
var config = require('../config');
var express = require('express');
var schema = require('./schema');
var helper = require('./helper');
var transporter = require('./transporter');

var internals = {};


internals.router = express.Router();
exports.middleware = internals.router;

internals.router.post('/send', helper.validateBody(schema.sendBody), function (req, res) {
    var from = req.body.from || config.transporter.from;
    var to = req.body.to;
    var subject = req.body.subject;
    var text = req.body.text;
    var html = req.body.html;

    var emailToSend = {from: from, to: to, subject: subject, text: text};

    if(html) {
        emailToSend.html = html;
    }

    transporter.send(emailToSend);

    res.status(200).send('done');
});
