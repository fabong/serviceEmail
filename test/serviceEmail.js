var should = require('should');
var request = require('request');
var bodyParser = require('body-parser');
var sinon = require('sinon');
var config = require('../config');
var express = require('express');
var transporter = require('../lib/transporter');

var app = express();

config.app.port=8083;

require('../app.js');

var token = '1234';
var localUrl = 'http://127.0.0.1:'+config.app.port;
var from = 'Test <do-not-respond@test.com>';
var to = 'Test 2 <test2@test.com>';
var transporterMock = null;

describe('Email send', function () {
    beforeEach(function (done) {
        transporterMock = sinon.mock(transporter);
        done();
    });

    afterEach(function(done) {
        transporterMock.restore();
        done();
    });

    it('should return 200 Ok', function (done) {
        transporterMock.expects('send').once().returns();
        var params = {
            to: to,
            subject: 'TEST 1',
            text: 'This is a first test'
        };
        var url = localUrl + '/api/v1/send';
        var opts = {url: url, method:'POST', json:true, headers: {token: token}, body: params};

        request(opts, function (error, response, body) {
            should.not.exist(error);
            (200).should.equal(response.statusCode);
            transporterMock.verify();
            done();
        });
    });

    it('with from parameter should return 200 Ok', function (done) {
        transporterMock.expects('send').once().returns();
        var params = {
            from: from,
            to: to,
            subject: 'TEST 1',
            text: 'This is a first test'
        };
        var url = localUrl + '/api/v1/send';
        var opts = {url: url, method:'POST', json:true, headers: {token: token}, body: params};

        request(opts, function (error, response, body) {
            should.not.exist(error);
            (200).should.equal(response.statusCode);
            transporterMock.verify();
            done();
        });
    });

    it('with from and html parameter should return 200 Ok', function (done) {
        transporterMock.expects('send').once().returns();
        var params = {
            from: from,
            to: to,
            subject: 'TEST 1',
            text: 'This is a first test',
            html: 'This is a <strong>third test</strong>'
        };
        var url = localUrl + '/api/v1/send';
        var opts = {url: url, method:'POST', json:true, headers: {token: token}, body: params};

        request(opts, function (error, response, body) {
            should.not.exist(error);
            (200).should.equal(response.statusCode);
            transporterMock.verify();
            done();
        });
    });

    it('with no text parameter should return 400 Error', function (done) {
        transporterMock.expects('send').never();
        var params = {
            from: from,
            to: to,
            subject: 'TEST 3',
            html: 'This is a <strong>third test</strong>'
        };
        var url = localUrl + '/api/v1/send';
        var opts = {url: url, method:'POST', json:true, headers: {token: token}, body: params};

        request(opts, function (error, response, body) {
            (400).should.equal(response.statusCode);
            transporterMock.verify();
            done();
        });
    });

    it('with no parameter should return 400 Error', function (done) {
        transporterMock.expects('send').never();
        var params = {};
        var url = localUrl + '/api/v1/send';
        var opts = {url: url, method:'POST', json:true, headers: {token: token}, body: params};

        request(opts, function (error, response, body) {
            (400).should.equal(response.statusCode);
            transporterMock.verify();
            done();
        });
    });
});
