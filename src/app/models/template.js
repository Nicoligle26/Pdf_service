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
      },
    };
  }

  static get relationMappings() {
    const Project = require('./project');

    return {
      projects: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: 'templates.project_id',
          to: 'project.id',
        },
      },
    };
  }
}

module.exports = Template;
