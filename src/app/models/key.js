const { Model } = require('objection');

/**
 * CREATE model of key
 * @param  {} {return'keys';}staticgetjsonSchema(
 * @param  {'object'} {return{type
 * @param  {['key_project_id']} required
 * @param  {{id:{type:'integer'}} properties
 * @param  {{type:'timestamp'}} created_at
 * @param  {{type:'timestamp'}} updated_at
 * @param  {} }
 * @param  {} }}staticgetrelationMappings(
 * @param  {} {constProject=require('./project'
 * @param  {{relation:Model.BelongsToOneRelation} ;return{projects
 * @param  {Project}}}}} modelClass
 * @returns Project
 */
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
