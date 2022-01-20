const Template = require('../models/template');
const { getTemplatesOpts, getTemplate } = require('../schemas/templates');

/**
 * GET Template list endpoint
 * @param  {object} req
 * @param  {object} reply
 */
const index = async (_req, reply) => {
  const templates = await Template.query();
  reply.send(templates);
};

/**
 * GET Template details endpoint
 * @param  {object} req
 * @param  {Object} reply
 */
async function show(req, reply) {
  const template = await Template.query()
    .findById(req.params.id)
    .throwIfNotFound();
  reply.send(template);
}

module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: getTemplatesOpts,
    handler: index,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: getTemplate,
    handler: show,
  });
};
