const tmp = require('tmp-promise');
const AWS = require('aws-sdk');
const carbone = require('carbone');
const fs = require('fs').promises;

// const PdfService = require('../services/pdf_service');
const { getTemplate } = require('../schemas/templates');

async function create(_req, reply) {
  AWS.config.update({ region: 'us-east-1' });

  const s3 = new AWS.S3({});
  const t = await tmp.file();
  console.log(t);

  const params = {
    Bucket: 'guarapo-pdf-service',
    Key: 'templates/prueba2.odt',
  };

  const options = {
    convertTo: 'pdf',
  };

  const data = {
    users: [
      {
        number: '105083512',
        name: 'John Barranco',
        loan: '$600.000,00 M.C.',
        balance: '$300.000,00 M.C.',
        payment: '$300.000,00 M.C.',
        interests: '$350.000,00 M.C.',
        balanceDue: '$0',
        coutum: 'No. cuota',
        monthlyCoutum: '$175.000,00 M.C.',
        minValue: '$175.000,00 M.C.',
      },
      {
        number: '147038802',
        name: 'John Barranco',
        loan: '$600.000,00 M.C.',
        balance: '$300.000,00 M.C.',
        payment: '$300.000,00 M.C.',
        interests: '$350.000,00 M.C.',
        balanceDue: '$0',
        coutum: 'No. cuota',
        monthlyCoutum: '$175.000,00 M.C.',
        minValue: '$175.000,00 M.C.',
      },
    ],
  };

  try {
    const readStream = s3.getObject(params).createReadStream();
    await fs.writeFile(t.path, readStream, { flag: 'w+' });

    carbone.render(t.path, data, options, function callback(_err, result) {
      reply
        .header('Content-Type', 'application/pdf')
        .header('Content-Disposition', 'inline; filename="mypdf.pdf"')
        .send(result);
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/',
    schema: getTemplate,
    handler: create,
  });
};
