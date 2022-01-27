const knexCleaner = require('knex-cleaner');
const knex = require('../db/database.js');
const Model = require('objection').Model;
const Factory = require('rosie').Factory

Model.knex(knex);
global.context = describe;
global.xcontext = xdescribe;
global.beforeEach(async () => {
    global.Factory = Factory;
    await knexCleaner.clean(knex);
});

global.afterAll(() => {
    fastify.close()
})

global.insertClass = (klass) => function BaseFactory(attributes) {
   return klass.query().insert(attributes)
}