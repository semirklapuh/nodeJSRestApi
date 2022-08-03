const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

router.get("/", (req, res) =>
  User.findAll()
    .then((users) => {
      console.log(users);
      res.status(200).send({ users });
    })
    .catch((err) => console.log(err))
);

router.get("/:id", (req, res) =>
  User.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((users) => {
      console.log(users);
      res.status(200).send({ users });
    })
    .catch((err) => console.log(err))
);

router.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    Position: req.body.position,
    age: req.body.age,
    createdat: Date.now(),
  })
    .then((users) => {
      console.log(users);
      res.status(200).send({ users });

      console.log("Body from req: " + req.body);
    })
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  User.update(
    {
      Position: req.body.position,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((users) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
