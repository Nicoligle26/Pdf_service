const { Factory } = require('rosie');
const Project = require('../../src/app/models/project');

const factory = Factory.define('project', insertClass(Project)).attr(
  'name',
  'Project 1'
);

module.exports = factory;
