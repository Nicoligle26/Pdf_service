const templateController = require('./controllers/templates_controller.js');
const { errorHandler } = require('../errors/handler');

/**
 * @param  {} fastify
 * @param  {} options
 * @param  {} done
 */
function templateRoutes(fastify, options, done) {
    fastify.setErrorHandler(errorHandler);
    fastify.register(templateController, { prefix: '/v1/templates' })
    done();
}

module.exports = templateRoutes
