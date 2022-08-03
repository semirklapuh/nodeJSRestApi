const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.send({ gigs });
    })
    .catch((err) => console.log(err))
);

router.get("/:id", (req, res) =>
  Gig.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((gigs) => {
      console.log(gigs);
      res.send({ gigs });
    })
    .catch((err) => console.log(err))
);

router.post("/", (req, res) => {
  Gig.create({
    title: req.body.title,
    technologies: req.body.technologies,
    description: req.body.description,
    budget: req.body.budget,
    contact_email: req.body.contact_email,
  })
    .then((gigs) => {
      console.log(gigs);
      res.status(200).send({ gigs });

      console.log("Body from req: " + req.body);
    })
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  Gig.update(
    {
      technologies: req.body.technologies,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
