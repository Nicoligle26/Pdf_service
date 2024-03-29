const { Model } = require('objection');

class Key extends Model {
  static get tableName() {
    return 'keys';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['key_project'],

      properties: {
        id: { type: 'integer' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
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
          from: 'projects.key_project',
          to: 'projects.id',
        },
      },
    };
  }
}

module.exports = Key;
