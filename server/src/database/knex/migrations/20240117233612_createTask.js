/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.text("description");
    table.text("title");
    table.text("icon_name");
    table.text("status");
    table.integer("board_id").references("id").inTable("boards");
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("tasks");
