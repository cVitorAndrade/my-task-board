const knex = require("../database/knex");

class BoardController {
    async create (request, response) {
        const [board_id] = await knex("boards").insert({});

        const defaultTasks = [
            {
                title: "Task in Progress",
                description: "",
                status: "in progress",
                icon_name: "clock",
                board_id
            },
            {
                title: "Task Completed",
                description: "",
                status: "completed",
                icon_name: "exercise",
                board_id
            },
            {
                title: "Task Won´t Do",
                description: "",
                status: "not do",
                icon_name: "cup",
                board_id
            },
        ]

        await knex("tasks").insert(defaultTasks);

        return response.json({
            status: "sucess",
            message: "board created successfully",
            board_id
        })
    }
}

module.exports = BoardController;