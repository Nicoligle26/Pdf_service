'use strict';
require('dotenv').config({ path: '../.env' });

const path = require('path');
// Update with your config settings.

const databaseConfiguration = {
  client: 'pg',
  connection: {
    host: process.env.HOST,
    port: process.env.PORT_DB,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(__dirname, './migrations')
  }, 
  seeds: {
    directory: path.resolve(__dirname, './seeds')
  }
};


module.exports = databaseConfiguration;