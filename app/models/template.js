const { Model } = require('objection');

class Template extends Model {
    static get tableName() {
        return 'templates';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                created_at: { type: 'timestamp' },
                updated_at: { type: 'timestamp' },
            },
        }
    }

    static get relationMappings() {
        const Project = require('./project');

        return {
            projects: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project
            }
        }
    }
}

module.exports = Template