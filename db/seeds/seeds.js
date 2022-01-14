'use strict';

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([{
    id: 1,
    name: 'yocargo'
  }, {
    id: 2,
    name: 'makershoes'
  }, {
    id: 3,
    name: 'warehouse'
  }, {
    id: 4,
    name: 'pospery'
  }])
};

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('templates').insert([{
    id: 1,
    name: 'extracto',
    project_id: 1
  }, {
    id: 2,
    name: 'factura',
    project_id: 2
  }, {
    id: 3,
    name: 'contracto',
    project_id: 3
  }, {
    id: 4,
    name: 'factura2',
    project_id: 4
  }])
};

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('keys').insert([{
    id: 1,
    key_project: 1
  }, {
    id: 2,
    key_project: 2
  }, {
    id: 3,
    key_project: 3
  }, {
    id: 4,
    key_project: 4
  }])
};
