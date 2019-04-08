let futureProjects = [];
let currentProjects = [];

let id = 0;

const postFutureProjects = (req, res) => {
  futureProjects.push({ ...req.body, id });
  id++;
  res.status(200).json(futureProjects);
};

const getFutureProjects = (req, res) => {
  res.status(200).json(futureProjects);
};

const bidWon = (req, res) => {
  let index = futureProjects.findIndex(project => project.id == req.params.id);
  currentProjects.push(futureProjects[index]);
  futureProjects.splice(index, 1);
  res.status(200).json(futureProjects);
};

const getCurrentProjects = (req, res) => {
  res.status(200).json(currentProjects);
};

const markComplete = (req, res) => {
  // currentProjects.findIndex(project => project.id == req.params.id);
  currentProjects.splice(
    currentProjects.findIndex(project => project.id == req.params.id),
    1
  );
  res.status(200).json(currentProjects);
};

module.exports = {
  postFutureProjects,
  getFutureProjects,
  bidWon,
  getCurrentProjects,
  markComplete
};
