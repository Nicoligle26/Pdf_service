const { Model } = require('objection');
/**
 * CREATE model of template
 * @param  {} {return'templates';}staticgetjsonSchema(
 * @param  {'object'} {return{type
 * @param  {['name']} required
 * @param  {{id:{type:'integer'}} properties
 * @param  {{type:'string'} name
 * @param  {1} minLength
 * @param  {255}} maxLength
 * @param  {{type:'timestamp'}} created_at
 * @param  {{type:'timestamp'}} updated_at
 * @param  {} }
 * @param  {} }}staticgetrelationMappings(
 * @param  {} {constProject=require('./project'
 * @param  {{relation:Model.BelongsToOneRelation} ;return{projects
 * @param  {Project}}}}} modelClass
 * @returns Project
 */
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
      },
    };
  }
}

module.exports = Template;
