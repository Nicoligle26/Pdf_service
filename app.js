require('dotenv').config({ path: `.env${process.env.NODE_ENV && `.${process.env.NODE_ENV}`}` });
const Model = require('objection').Model;
const knex = require('./db/database.js');
const initObjection = (knex) => {
    Model.knex(knex);
};


async function build(opts = {}) {
    const fastify = require('fastify')({ logger: true, ...opts })

    fastify.register(require('fastify-swagger'), {
        exposeRoutes: true,
        routePrefix: '/docs',
        swagger: {
            info: { title: 'fastify-api' },
        },
    })
    fastify.register(require('./src/app/routes.js'));
    initObjection(knex);
    return fastify
}

module.exports = build;