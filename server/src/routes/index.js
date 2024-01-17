const { Router } = require("express");

const router = Router();
const boardRoutes = require("./board.routes");

router.use("/board", boardRoutes);

module.exports = router;