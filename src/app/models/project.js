const { Model } = require('objection');

class Project extends Model {
    static get tableName() {
        return 'projects';
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
        const Template = require('./template');
        const Key = require('./key');

        return {
            templates: {
                relation: Model.HasManyRelation,
                modelClass: Template
            },

            keys: {
                relation: Model.HasOneRelation,
                modelClass: Key
            }
        }
    }
}

module.exports = Project