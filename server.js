require('dotenv').config({ path: '.env' });
const build = require('./app');

const { PORT_SERVER } = process.env;

const start = async () => {
  try {
    const fastify = await build({});
    fastify.listen(PORT_SERVER);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
