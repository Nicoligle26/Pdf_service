require('dotenv').config({ path: '.env' });
const build = require('./app');

const { PORT_SERVER } = process.env;

const start = async () => {
  const fastify = await build({});

  try {
    fastify.listen(PORT_SERVER);
  } catch (error) {
    console.log(error);
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
