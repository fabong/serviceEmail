var debug = require('debug')('schema');


var internals = {};


exports.sendBody = {
    title: 'send body',
    type: 'object',
    additionalProperties: false,
    properties: {
        from: {
            type: 'string'
        },
        to: {
            type: 'string'
        },
        subject: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        html: {
            type: 'string'
        }
    },
    required: ['to', 'subject','text']
};


exports.batchBody = {
    title: 'batch send body',
    type: 'array',
    additionalItems: false,
    items: exports.sendBody
};
