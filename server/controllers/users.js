const express = require("express");
const users = require("../models/users.js");

const app = express.Router();

app
  .get("/", (req, res, next) => {
    users
      .getUsers()
      .then((x) => res.status(200).send(x))
      .catch(next);
  })
  .get("/validate/:user/:password", (req, res, next) => {
    console.log("validate"+req.params.user+req.params.password);
    users
      .validate(req.params.user, req.params.password)
      .then((x) => res.status(200).send(x))
      .catch(next);
  })
  .get("/autocomplete/:query", (req, res, next) => {
    users
      .autocompleteUsers(req.params.query)
      .then((x) => res.status(200).send(x))
      .catch(next);
  })
  .get("/:id", (req, res, next) => {
    users
      .getUser(req.params.id)
      .then((user) => {
        if (user) {
          res.status(200).send(user);
        } else {
          res.status(404).send("User not found");
        }
      })
      .catch(next);
  })
  .patch("/:id", (req, res, next) => {
    users
      .updateUser(+req.params.id, req.body)
      .then((x) => res.status(200).send(x))
      .catch(next);
  })
  .post("/", (req, res, next) => {
    users
      .addUser(req.body)
      .then((x) => res.status(200).send(x))
      .catch(next);
  })
  .delete("/:id", (req, res, next) => {
    users
      .deleteUser(+req.params.id)
      .then((x) => res.status(200).send(x))
      .catch(next);
  })
  .post("/seed", (req, res, next) => {
    users
      .seed()
      .then((x) => res.status(200).send(x))
      .catch(next);
  });

module.exports = app;
