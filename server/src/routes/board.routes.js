const { Router } = require("express");

const boardRoutes = Router();

const BoardController = require("../controllers/BoardsController");
const boardController = new BoardController();

boardRoutes.post("/", boardController.create);
boardRoutes.put("/:board_id", boardController.update);
boardRoutes.get("/:board_id", boardController.show);

module.exports = boardRoutes;