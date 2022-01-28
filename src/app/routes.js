const templateController = require('./controllers/templates_controller');
const pdfServiceController = require('./controllers/pdf_service_controller');
const { errorHandler } = require('../errors/handler');

/**
 * @param  {} fastify
 * @param  {} options
 * @param  {} done
 */
function templateRoutes(fastify, _options, done) {
  fastify.setErrorHandler(errorHandler);
  fastify.register(templateController, { prefix: '/v1/templates' });
  fastify.register(pdfServiceController, { prefix: '/v1/pdf_services' });
  done();
}

module.exports = templateRoutes;
