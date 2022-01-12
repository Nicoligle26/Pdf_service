const fastify = require('fastify')({ logger: true })
const PORT = process.env.PORT

const start = async () => {
    try {
        await fastify.listen(PORT);
    } catch {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();