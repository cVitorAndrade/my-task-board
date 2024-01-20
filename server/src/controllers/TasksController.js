const knex = require("../database/knex");
class TasksController {
    async create (request, response) {
        const { board_id } = request.params;

        await knex("tasks").insert({
            title: "Task To Do",
            icon_name: "books",
            description: "",
            status: "",
            board_id
        })

        return response.json({
            status: "sucess",
            message: "task created successfully"
        });
    }

    async index (request, response) {
        const { board_id } = request.params;
        const tasks = await knex("tasks").where({ board_id });

        return response.json({
            tasks
        });
    }
}

module.exports = TasksController;