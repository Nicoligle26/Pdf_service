const TemplateSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    project_id: { type: 'integer' },
  },
};

const getTemplatesOpts = {
  response: {
    200: {
      type: 'array',
      templates: TemplateSchema,
    },
  },
};

const getTemplate = {
  response: {
    200: TemplateSchema,
  },
};

module.exports = {
  getTemplatesOpts,
  getTemplate,
};
