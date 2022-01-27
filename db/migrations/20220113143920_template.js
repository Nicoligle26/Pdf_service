exports.up = function up(knex) {
  return knex.schema.createTable('templates', (t) => {
    t.increments('id').primary();
    t.string('name', 255).notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
    t.integer('project_id').unsigned().notNullable();

    t.foreign('project_id').references('id').inTable('projects');
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTableIfExists('templates');
};
