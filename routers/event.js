const { Router, application } = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();

const Team = require("../models").team;
const Events = require("../models").event;
const EventParticipation = require("../models").eventParticipation;
const Match = require("../models").matches;

//ADD COLUMN "STATUS" TO EVENT, EVENT CAN HAVE 3 POSSIBLE STATUS: "PLANNED", "LIVE", "COMPLETED"

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
      include: { model: Team },
    });
    response.send(events);
  } catch (e) {
    next(e);
  }
});

router.post("/new", authMiddleware, async (req, res, next) => {
  try {
    const { description, pitchId, capacity } = req.body;
    const { id } = req.user;
    const event = await Events.create({
      description,
      pitchId,
      capacity,
      rounds: capacity - 1,
      coachId: id,
      categoryId: 2,
    });

    return res.status(201).send({ message: "New event created!", event });
  } catch (e) {
    console.log(e);
  }
});

//join event -> create an entry on join table with teamId and eventId

router.post("/join", authMiddleware, async (req, res, next) => {
  try {
    const { teamId } = req.user;
    const { eventId } = req.body;

    const eventParticipation = await EventParticipation.create({
      eventId,
      teamId,
    });
    return res
      .status(201)
      .send({ message: "New team in yourr event!", eventParticipation });
  } catch (e) {
    console.log(e);
  }
});

router.post("/:id/start", async (request, response, next) => {
  try {
    const { id } = request.params;
    //get a tournament with its participants
    const event = await Events.findByPk(id, {
      include: {
        model: Team,
        attributes: ["id"],
        through: { attributes: [] },
      },
    });
    // console.log("event: ", event);
    // console.log("Eventt log ", event);
    //get only the participants id
    const eventTeams = event.teams.map((c) => c.id);

    // console.log("event.teams : ", eventTeams);
    //define the pairs for the duels
    let pairs = [];

    while (eventTeams.length >= 2) {
      const random1 = Math.random() * eventTeams.length;
      const team1 = eventTeams.splice(random1, 1)[0];

      const random2 = Math.random() * eventTeams.length;
      const team2 = eventTeams.splice(random2, 1)[0];

      pairs.push({ charA: team1, charB: team2 });
    }

    // create round 1 duels
    const duelsRoundOne = pairs.map(async (duel) => {
      const allDuels = await Match.create({
        teamA: duel.charA,
        teamB: duel.charB,
        round: 1,
        eventId: id,
      });

      return allDuels;
    });

    await Promise.all(duelsRoundOne);

    const eventWithMatches = await Events.findByPk(id, {
      include: {
        model: Match,
        include: ["team_A", "team_B"],
      },
    });

    response.send(eventWithMatches);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/matches/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const matches = await Match.findAll({
      include: ["team_A", "team_B"],
      where: { eventId: id },
    });
    console.log("matches HERE:", matches);
    res.send(matches);
  } catch (e) {
    next(e);
  }
});

//Generate next round
//POST request
//BODY info => array of team ids, round
//PARAMS => eventId

module.exports = router;
