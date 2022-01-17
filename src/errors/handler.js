'use strict';

function validationErrorMessage(error, context) {
    const { dataPath, message, params } = error;
    const prefix = `${context || ''}${dataPath || ''}`;
    const paddedPrefix = prefix ? `${prefix} ` : '';
    const allowedValues =
        params && Array.isArray(params.allowedValues)
            ? `: ${params.allowedValues.map(v => `'${v}'`).join(', ')}`
            : '';
    return `${paddedPrefix}${message}${allowedValues}`;
}
const REQUEST_NOT_FOUND_ERROR = 'REQUEST_VALIDATION_ERROR';
const notFoundResponse = (error, request, reply) => {
    const body = {
        errors: [{
            code: REQUEST_NOT_FOUND_ERROR,
            message: error.message
        }]
    };
    reply.code(404);
    reply.type('application/json');
    reply.send(body);
}

const errorFunctions = {
    NotFoundError: notFoundResponse
}

const errorHandler = (error, request, reply) => {
    const func = errorFunctions[error.name];
    if (func)
        func(error, request, reply);
    if (Array.isArray(error.validation)) {
        const body = {
            errors: error.validation.map(err => ({
                code: 'REQUEST_VALIDATION_ERROR',
                message: validationErrorMessage(err, error.validationContext)
            }))
        };
        reply.code(400);
        reply.type('application/json');
        reply.send(body);
        return;
    }
};

module.exports = {
    errorHandler
};