const { Model } = require('objection');
/**
 * CREATE model of project
 * @param  {} {return'projects';}staticgetjsonSchema(
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
 * @param  {} {constTemplate=require('./template'
 * @param  {} ;constKey=require('./key'
 * @param  {{relation:Model.HasManyRelation} ;return{templates
 * @param  {Template}} modelClass
 * @param  {{relation:Model.HasOneRelation} keys
 * @param  {Key}}}}} modelClass
 * @returns Key
 */
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
                name: { type: 'string', minLength: 1, maxLength: 255 }
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