const express = require("express");
const controllers = require("./controllers");

const app = express();

app.use(express.json());

app.post("/api/futureProjects", controllers.postFutureProjects);

app.get("/api/futureProjects", controllers.getFutureProjects);

app.delete("/api/futureProjects/:id", controllers.bidWon);

app.get("/api/currentProjects", controllers.getCurrentProjects);

app.delete("/api/currentProjects/:id", controllers.markComplete);

const PORT = 5050;

app.listen(PORT, () => console.log(`Hello on Port ${PORT}!`));
