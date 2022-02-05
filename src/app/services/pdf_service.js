const carbone = require('carbone');
const TemplateService = require('./template_service');
const Project = require('../models/project');

function PdfService({ projectId }) {
  this.projectId = projectId;
}

async function _getProjectById(id) {
  return await Project.query().findById(id).throwIfNotFound();
}

async function generate(templateId, data, options, callback) {
  console.log('ENTRE PDF SERVICE')
  const project = await _getProjectById(this.projectId);
  await project
    .$relatedQuery('templates')
    .where('id', templateId)
    .throwIfNotFound();

  const templateService = new TemplateService();
  const template = templateService.getTemplate(this.projectId, templateId);
  carbone.render(template.path, data, options, callback);
}

PdfService.prototype.generate = generate;
module.exports = PdfService;
