var envConf = {};
if (process.env.config && process.env.config.length > 0) {
    envConf = JSON.parse(process.env.config);
}

exports.app = {};
exports.app.port = (process.env.PORT && parseInt(process.env.PORT) > 0) ? parseInt(process.env.PORT) : 8083;


exports.security = {};
exports.security.token = envConf.token || '1234';

exports.transport = {};
exports.transport.from = envConf.from || 'Email Service <donotrespond@test.net>';


