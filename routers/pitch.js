const { Router, application } = require("express");

const router = new Router();
const Pitches = require("../models").pitch;

router.get("/", async (request, response, next) => {
  try {
    const pitches = await Pitches.findAll();
    response.send(pitches);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
