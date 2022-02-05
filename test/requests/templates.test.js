require('../factories');

describe('TemplateController', () => {
  let project;
  let template;

  beforeEach(async () => {
    project = await Factory.build('project');
    template = await Factory.build('template', { project_id: project.id });
  });

  describe('GET /templates', () => {
    it('returns 200 status', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: '/v1/templates',
      });

      const payload = response.json();
      expect(response.statusCode).toEqual(200);
      expect(payload).toHaveLength(1);
      expect(payload[0]).toHaveProperty('project_id');
      expect(payload[0].project_id).toEqual(template.project_id);
    });
  });

  describe('GET /templates/1', () => {
    it('returns 200 status', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: '/v1/template/1',
      });

      const payload = response.json();
      expect(payload.id).toBeDefined();
      expect(payload.id).toEqual(template.id);
      expect(response.statusCode).toEqual(200);
      expect(payload).toHaveProperty('project_id');
      expect(payload.project_id).toEqual(template.project_id);
    });
  });
});
