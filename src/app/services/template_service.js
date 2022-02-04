const AWS = require('aws-sdk');
const tmp = require('tmp-promise');
const fs = require('fs').promises;

const Project = require('../models/project');
const Template = require('../models/template');

function TemplateService() { }

async function getTemplate(projectId, templateId) {
  console.log('ENTREEEEE AL TEMPLATESERVICE');
  AWS.config.update({ region: 'us-east-1' });

  const s3 = new AWS.S3({});
  const t = await tmp.file();
  console.log(t);

  const project = await Project.query().findById(projectId);
  const template = await Template.query().findById(templateId);

  const params = {
    Bucket: 'guarapo-pdf-service',
    Key: `projects/${project}/templates/${template}`,
  };

  try {
    const readStream = s3.getObject(params).createReadStream();
    await fs.writeFile(t.path, readStream, { flag: 'w+' });
  } catch (e) {
    console.log(e);
  }
}

TemplateService.prototype.getTemplate = getTemplate;
module.exports = getTemplate;
