const { Router, application } = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();

const Teams = require("../models").team;
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
      include: { model: Teams },
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

// start tournament -> get list of teams for that event, generate matches
// router.get("/:id/teams", async (req, res, next) => {
//   try {
//     console.log("here");
//     const { id } = req.params;
//     const eventTeams = await Events.findByPk(id, {
//       include: {
//         model: Teams,
//         attributes: ["id"],
//         through: { attributes: [] },
//       },
//     });
//     const { teams } = eventTeams.toJSON();
//     // console.log("to map", teams);

//     const shuffleTeams = teams.sort(() => Math.random() - 0.5);
//     console.log("shuffled array", shuffleTeams);

//     //create the matches for 1 round

//     if (eventTeams.capacity === 4) {
//       const firstMatch = shuffleTeams.slice(0, 2);
//       const secondMatch = shuffleTeams.slice(2, 4);
//       console.log("first match :", firstMatch);
//       console.log("second match :", secondMatch);

//       //ideally, we would do this inside a map
//       await Match.create({
//         teamA: firstMatch[0].id,
//         teamB: firstMatch[1].id,
//         eventId: eventTeams.id,
//         round: 1,
//       });

//       await Match.create({
//         teamA: secondMatch[0].id,
//         teamB: secondMatch[1].id,
//         eventId: eventTeams.id,
//         round: 1,
//       });
//     }

//     if (eventTeams.capacity === 8) {
//       const firstMatch = shuffleTeams.slice(0, 2);
//       const secondMatch = shuffleTeams.slice(2, 4);
//       const thirdMatch = shuffleTeams.slice(4, 6);
//       const fourthMatch = shuffleTeams.slice(6, 8);

//       console.log("first match :", firstMatch);
//       console.log("second match :", secondMatch);
//       console.log("third match ", thirdMatch);
//       console.log("fourth match: ", fourthMatch);
//     }

//     res.send(teams);
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// });

router.post("/:id/start", async (request, response, next) => {
  try {
    const { id } = request.params;
    //get a tournament with its participants
    const event = await Events.findByPk(id, {
      include: {
        model: Teams,
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
        include: Teams,
      },
    });

    response.send(eventWithMatches);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
