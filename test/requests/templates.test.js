require('../factories')

const template = require('../../src/app/controllers/templates_controller');

describe("TemplateController", () => {
    let project, template;

    beforeEach(async () => {
        project = await Factory.build("project")
        template = await Factory.build("template", { project_id: project.id })
    })

    describe('GET /templates', () => {
        it('returns 200 status', async () => {
            const response = await fastify.inject({
                method: 'GET',
                url: '/v1/templates'
            })

            const payload = response.json()
            expect(response.statusCode).toEqual(200)
            expect(payload).toHaveLength(1)
            expect(payload[0]).toHaveProperty("project_id")
            expect(payload[0].project_id).toEqual(template.project_id)
        })
    })

    describe('GET /templates/1', () => {
        it('returns 200 status', async () => {
            const response = await fastify.inject({
                method: 'GET',
                url: '/v1/templates/id'
            })

            const payload = response.json()
            expect(response.statusCode).toEqual(200)
            expect(payload).toHaveLength(1)
            expect(payload[0]).toHaveProperty("project_id")
            expect(payload[0].project_id).toEqual(template.project_id)
        })
    })
})
