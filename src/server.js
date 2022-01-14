const fastify = require('fastify')({ logger: true })
fastify.register(require('fastify-swagger'), {
    exposeRoutes: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
    },
})
fastify.register(require('./app/routes.js'));

const PORT_SERVER = process.env.PORT_SERVER


const start = async () => {
    try {
        await fastify.listen(PORT_SERVER);
    } catch {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();