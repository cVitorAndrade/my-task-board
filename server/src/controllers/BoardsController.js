const knex = require("../database/knex");

class BoardController {
    async create (request, response) {
        const [board_id] = await knex("boards").insert({
            title: "My Task Board",
            description: "Tasks to keep organised"
        });

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
            {
                title: "Task To Do",
                description: "Work on a Challenge on devChallenges.io, learn TypeScript",
                status: "",
                icon_name: "books",
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

    async show (request, response) {
        const { board_id } = request.params;
        const board = await knex("boards").where({ id: board_id }).first();

        return response.json({
            board
        })
    }

    async update (request, response) {
        const { board_id } = request.params;
        const { title, description } = request.body;

        await knex("boards").update({
            title,
            description
        }).where( { id: board_id });

        return response.json({
            status: "sucess",
            message: "Board atualizado com sucesso"
        })

    }
}

module.exports = BoardController;