const { Router } = require("express");

const taskRoutes = Router();

const TasksController = require("../controllers/TasksController");
const tasksController = new TasksController();

taskRoutes.get("/:board_id", tasksController.index);
taskRoutes.post("/:board_id", tasksController.create)

module.exports = taskRoutes;