const PdfService = require('../services/pdf_service');

async function getTemplate(req, reply) {
    const s3 = new AWS.S3({});
    const params = {
        Bucket: 'guarapo-pdf-service',
        Key: '/templates/prueba2.odt'
    };
    const file = require('fs').createWriteStream('../../../docs/prueba.odt');
    s3.getObject(params).createReadStream().pipe(file);
}