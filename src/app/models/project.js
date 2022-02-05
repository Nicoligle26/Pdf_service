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
      },
    };
  }

  static get relationMappings() {
    const Template = require('./template');
    const Key = require('./key');

    return {
      templates: {
        relation: Model.HasManyRelation,
        modelClass: Template,
        join: {
          from: 'projects.id',
          to: 'templates.project_id',
        },
      },

      keys: {
        relation: Model.HasOneRelation,
        modelClass: Key,
        join: {
          from: 'projects.id',
          to: 'keys.key_project',
        },
      },
    };
  }
}

module.exports = Project;
