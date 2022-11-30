const { Router, application } = require("express");

const router = new Router();

const Teams = require("../models").team;
const Events = require("../models").event;

router.get("/", async (request, response, next) => {
  try {
    const events = await Events.findAll();
    response.send(events);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const eventId = request.params.id;
    const events = await Events.findByPk(eventId, {
      include: { model: Teams },
    });
    response.send(events);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
