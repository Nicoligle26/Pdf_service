const templateController = require('./controllers/templates_controller');
const projectController = require('./controllers/projects_controller');
const pdfServiceController = require('./controllers/pdf_service_controller');
const { errorHandler } = require('../errors/handler');

/**
 * @param  {} fastify
 * @param  {} options
 * @param  {} done
 */
function templateRoutes(fastify, _options, done) {
  fastify.setErrorHandler(errorHandler);
  fastify.register(templateController, { prefix: '/v1' });
  fastify.register(pdfServiceController, { prefix: '/v1/pdf_services' });
  fastify.register(projectController, { prefix: '/v1/projects' });
  done();
}

module.exports = templateRoutes;
