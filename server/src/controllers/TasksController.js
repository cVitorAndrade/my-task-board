const knex = require("../database/knex");
class TasksController {
    async index (request, response) {
        const { board_id } = request.params;
        const tasks = await knex("tasks").where({ board_id });

        return response.json({
            tasks
        });
    }
}

module.exports = TasksController;