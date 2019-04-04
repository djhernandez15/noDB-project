const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/futureProjects", );

app.get('/api/currentProjects', (req, res) => {
    res.json(currentProjects);
} );

app.put()

app.delete('/api/futureProjects/:jobSiteName', (req, res) => {
    res.json(futureProjects)
})

const PORT = 5050;

app.listen(PORT, () => console.log(`Hello on Port ${PORT}!`));
