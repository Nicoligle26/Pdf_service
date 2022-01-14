'use strict';

exports.up = function (knex) {
    return knex.schema
        .createTable('projects', function (t) {
            t.increments('id').primary();
            t.string('name', 255).notNullable();
            t.timestamp('created_at').defaultTo(knex.fn.now());
            t.timestamp('updated_at').defaultTo(knex.fn.now());
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects');
};
