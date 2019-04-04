const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/currentProjects");

const PORT = 5050;

app.listen(PORT, () => console.log(`Hello on Port ${PORT}!`));
