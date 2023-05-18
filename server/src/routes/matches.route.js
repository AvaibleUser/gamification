const { Router } = require("express");
const matchesController = require("../controllers/matches.controller");

const matchesRoutes = Router();

matchesRoutes.get("", matchesController.getAllMatches);
matchesRoutes.get("/:_id", matchesController.getMatch);
matchesRoutes.post("", matchesController.createMatch);
matchesRoutes.put("", matchesController.updateMatch);
matchesRoutes.post("/players", matchesController.addPlayerToTheMatch);
matchesRoutes.post("/message", matchesController.postChatMessage);

module.exports = { matchesRoutes };
