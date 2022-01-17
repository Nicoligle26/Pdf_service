const Factory = require('rosie').Factory
const Template = require('../../src/app/models/template')

const factory = Factory.define('template', insertClass(Template))
    .attr('project_id', null)
    .attr('name', "Template");


module.exports =  factory;