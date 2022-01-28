const carbone = require('carbone');
const fs = require('fs');
const { NotFoundError } = require('objection');

require('../factories');

jest.mock('../../src/app/services/template_service');
const PdfService = require('../../src/app/services/pdf_service');
const TemplateService = require('../../src/app/services/template_service');

jest.mock('carbone');

describe('PdfService', () => {
  describe('generate', () => {
    let project;
    let template;
    const id = 'f9b327e70bbcf42494ccb28b2d98e00e';

    beforeEach(async () => {
      project = await Factory.build('project');
      template = await Factory.build('template', { project_id: project.id });

      const demoFile = fs.readFileSync(
        `${__dirname}/../fixtures/file-sample.pdf`
      );
      carbone.render = jest.fn((_url, _data, callback) => callback(demoFile));
      TemplateService.prototype.getTemplate = jest.fn(
        (projectId, templateId) => ({
          path: `/tmp/${projectId}-${templateId}-${id}.odt`,
        })
      );
    });

    context('when project and template are valid', () => {
      test('returns a pdf file', (done) => {
        const data = {};
        const templateId = template.id;
        const projectId = project.id;
        const callback = (file) => {
          expect(file).toBeInstanceOf(Buffer);
          expect(carbone.render.mock.calls).toHaveLength(1);
          expect(carbone.render.mock.calls[0][0]).toEqual(
            `/tmp/${projectId}-${templateId}-${id}.odt`
          );
          expect(carbone.render.mock.calls[0][1]).toEqual(data);
          done();
        };

        const pdfService = new PdfService({ projectId });
        pdfService.generate(templateId, data, callback);
      });
    });

    context('when project id is invalid', () => {
      test('throws project id not found error', () => {
        const data = {};
        const templateId = template.id;
        const projectId = 10;
        const pdfService = new PdfService({ projectId });

        const callback = async () => {
          await pdfService.generate(templateId, data, callback);
        };

        // eslint-disable-next-line
        expect(callback()).rejects.toThrow(NotFoundError);
      });
    });

    context('when template id is invalid', () => {
      test('throws tempalte id not found error', () => {
        const data = {};
        const templateId = 10;
        const projectId = project.id;
        const pdfService = new PdfService({ projectId });

        const callback = async () => {
          await pdfService.generate(templateId, data, callback);
        };

        // eslint-disable-next-line
        expect(callback()).rejects.toThrow(NotFoundError);
      });
    });
  });
});
