'use strict';

exports.up = function (knex) {
    return knex.schema
        .createTable('keys', function (t) {
            t.increments('id').primary();
            t.integer('key_project').unsigned().notNullable();
            t.timestamp('created_at').defaultTo(knex.fn.now());
            t.timestamp('updated_at').defaultTo(knex.fn.now());

            t.foreign('key_project').references('id').inTable('projects');
        });

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('keys');
};
