const { Router } = require("express");

const boardRoutes = Router();

const BoardController = require("../controllers/BoardController");
const boardController = new BoardController();

boardRoutes.post("/", boardController.create);

module.exports = boardRoutes;