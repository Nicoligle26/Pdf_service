const ProjectSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
  },
};

const getProjectsOpts = {
  response: {
    200: {
      type: 'array',
      projects: ProjectSchema,
    },
  },
};

const getProject = {
  response: {
    200: ProjectSchema,
  },
};

module.exports = {
  getProjectsOpts,
  getProject,
};
