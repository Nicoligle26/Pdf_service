const Project = require('../models/project');
const { getProjectsOpts, getProject } = require('../schemas/projects');

const index = async (_req, reply) => {
  const projects = await Project.query();
  reply.send(projects);
};

async function create(req, reply) {
  const project = req.body;
  const newProject = await Project.query().insert(project);
  reply.code(201).send(newProject);
}

module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: getProjectsOpts,
    handler: index,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: getProject,
    handler: create,
  });
};
