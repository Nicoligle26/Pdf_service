require('dotenv').config({ path: '.env' });

const AWS = require('aws-sdk');

const Project = require('../models/project');
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

async function create(req, reply) {
  AWS.config.update({ region: 'us-east-1' });

  const s3 = new AWS.S3({});
  const projectId = req.params.id;

  const upload = (file) => {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `projects/${projectId}/templates/${file.filename}`,
      Body: file.file,
    };

    return s3.upload(params).promise();
  };
  const response = await upload(await req.file());

  const project = await Project.query().findById(projectId).throwIfNotFound();
  const newTemplate = await project.$relatedQuery('templates').insert({
    name: response.Key,
  });

  reply.send(
    'Uploaded the file successfully' +
      `\n The template has been created \n ${JSON.stringify(newTemplate)}`
  );
}

module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/templates',
    schema: getTemplatesOpts,
    handler: index,
  });

  fastify.route({
    method: 'GET',
    url: '/template/:id',
    schema: getTemplate,
    handler: show,
  });

  fastify.route({
    method: 'POST',
    url: '/projects/:id/templates',
    schema: getTemplate,
    handler: create,
  });
};
