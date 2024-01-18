const { Router } = require("express");

const taskRoutes = Router();

const TasksController = require("../controllers/TasksController");
const tasksController = new TasksController();

taskRoutes.get("/:board_id", tasksController.index);

module.exports = taskRoutes;