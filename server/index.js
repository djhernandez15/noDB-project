const express = require("express");
const controllers = require("./controllers");

const app = express();

app.use(express.json());

app.post("/api/futureprojects", controllers.postFutureProjects);

app.get("/api/futureprojects", controllers.getFutureProjects);

app.delete("/api/futureprojects/:id", controllers.bidWon);

app.get("/api/currentprojects", controllers.getCurrentProjects);

app.delete("/api/currentprojects/:id", controllers.markComplete);

const PORT = 5050;

app.listen(PORT, () => console.log(`Hello on Port ${PORT}!`));
