'use strict';
require('dotenv').config({ path: `.env${process.env.NODE_ENV && `.${process.env.NODE_ENV}`}` });

const path = require('path');
// Update with your config settings.
const databaseConfiguration = {
  client: 'postgresql',
  connection: {
    host: process.env.HOST,
    port: process.env.PORT_DB,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(__dirname, './db/migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, './db/seeds')
  }
};


module.exports = databaseConfiguration;