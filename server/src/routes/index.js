const { Router } = require("express");

const router = Router();

const boardRoutes = require("./board.routes");
const taskRoutes = require("./task.routes");

router.use("/board", boardRoutes);
router.use("/task", taskRoutes);

module.exports = router;