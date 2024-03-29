const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const routes = require("./routes");


app.use(express.json());
app.use(routes)

const PORT = 3333;
app.listen(PORT, () =>  console.log(`Server is running on Port: ${PORT}`));