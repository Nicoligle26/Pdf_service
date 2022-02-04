require('dotenv').config({
  path: `.env${process.env.NODE_ENV && `.${process.env.NODE_ENV}`}`,
});
const { Model } = require('objection');
const knex = require('./db/database');

const initObjection = (knexClient) => {
  Model.knex(knexClient);
};

async function build(opts = {}) {
  const fastify = require('fastify')({ logger: true, ...opts });

  fastify.register(require('fastify-multipart'));
  fastify.register(require('fastify-swagger'), {
    exposeRoutes: true,
    routePrefix: '/docs',
    swagger: {
      info: { title: 'fastify-api' },
    },
  });
  fastify.register(require('./src/app/routes'));
  initObjection(knex);
  return fastify;
}

module.exports = build;
