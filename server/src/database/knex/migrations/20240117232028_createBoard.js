/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("boards", table => {
    table.increments("id");
    table.text("description").defaultTo("Tasks to keep organised");
    table.text("title").defaultTo("My Task Board")
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("boards")
