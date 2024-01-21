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

        return response.status(201).json({
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

    async delete (request, response) {
        const { task_id } = request.params;

        await knex("tasks").where({ id: task_id }).delete();
        
        return response.json({
            status: "sucess",
            message: "Task deletada com sucesso"
        })
    }

    async update (request, response) {
        const { task_id } = request.params;
        const { title, description, icon_name, status } = request.body;

        await knex("tasks").where({ id: task_id }).update({
            title,
            description,
            icon_name,
            status
        });

        const task = await knex("tasks").where({ id: task_id })

        return response.json({
            status: "sucess",
            message: "task atualizada com sucesso",
            task
        })
    }
}

module.exports = TasksController;