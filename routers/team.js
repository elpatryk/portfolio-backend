const { Router, application } = require("express");

const router = new Router();
const Teams = require("../models").team;
const Users = require("../models").user;
router.get("/", async (request, response, next) => {
  try {
    const teams = await Teams.findAll({ include: { model: Users } });
    response.send(teams);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const teamId = request.params.id;
    const Team = await Teams.findByPk(teamId, {
      include: { model: Users },
    });
    response.send(Team);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
