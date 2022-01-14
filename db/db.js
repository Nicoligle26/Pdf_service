const knex = require('knex');
const knexfile = require('knexfie');

const db = knex(knexfile.development);
module.exports = db;