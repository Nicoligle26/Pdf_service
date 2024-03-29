const NodeEnvironment = require('jest-environment-node')
const fastifyBuilder = require('../app')

class FastifyEnvironment extends NodeEnvironment {
    async setup() {
        await super.setup()
        const fastify = await fastifyBuilder({logger: false})
        this.global.fastify = fastify
    }
}


module.exports = FastifyEnvironment