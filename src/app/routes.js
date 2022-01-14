const { getTemplates } = require('./controllers/templates_controller.js');

const Template = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        project_id: { type: 'integer' }
    },
}

const getTemplatesOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                templates: Template,
            },
        },
    },
    handler: getTemplates,
}

function templateRoutes(fastify, options, done) {
    fastify.get('/templates', getTemplatesOpts)

    done()
}

module.exports = templateRoutes
