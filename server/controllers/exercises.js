const express = require("express");
const exercises = require("../models/exercises.js");

const app = express.Router();

app.get("/", (req, res, next) => {
  exercises
    .getExercises()
    .then((x) => res.status(200).send(x))
    .catch(next);
});

app
.get("/:userid", (req, res, next) => {
    exercises
      .getUserExercises(req.params.userid)
      .then((exercises) => {
        if (exercises) {
          res.status(200).send(exercises);
        } else {
          res.status(404).send("User not found");
        }
      })
      .catch(next);
  });
  app.post("/", (req, res, next) => {
    console.log(req.body);
    exercises
      .addExercise(req.body)
      .then((x) => res.status(200).send(x))
      .catch(next);
  });
  app.patch("/:id", (req, res, next) => {
    exercises
      .updateExercise(+req.params.id, req.body)
      .then((x) => res.status(200).send(x))
      .catch(next);
  });
  app.delete("/:id", (req, res, next) => {
    exercises
      .deleteExercise(req.params.id)
      .then((x) => res.status(200).send(x))
      .catch(next);
  });
  app.post("/seed", (req, res, next) => {
    exercises
      .seed()
      .then((x) => res.status(200).send(x))
      .catch(next);
  });

module.exports = app;
