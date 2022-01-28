const tmp = require('tmp-promise');
const AWS = require('aws-sdk');
const fs = require('fs').promises;

const PdfService = require('../services/pdf_service');
const { getTemplatesOpts, getTemplate } = require('../schemas/templates');

async function create(req, reply) {
  AWS.config.update({ region: 'us-east-1' });

  s3 = new AWS.S3({});
  const t = await tmp.file();
  console.log(t);

  const params = {
    Bucket: 'guarapo-pdf-service',
    Key: 'templates/prueba2.odt',
  };
  try {
    const readStream = s3.getObject(params).createReadStream();

    const file = await fs.writeFile(t.path, readStream, { flag: 'w+' });
    console.log(file);
  } catch (e) {
    console.log(e);
  }

  reply.send({});
}

module.exports = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/',
    schema: getTemplate,
    handler: create,
  });
};
