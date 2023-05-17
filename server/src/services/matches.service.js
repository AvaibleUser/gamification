const { matchesModel } = require("../model/matches.model");
const mongoose = require("mongoose");

async function findMathces() {
  const matches = await matchesModel.find();

  return matches;
}

/**
 * @param {string} name
 */
async function findOneMatch(id) {
  const matches = await matchesModel.findById(id);

  return matches;
}

/**
 * @param {string} game
 * @param {string} creator
 * @param {date} createdAt
 * @param {number} gameTime
 * @param {*} state
 */
async function saveMatch(game, creator, createdAt, gameTime, state) {
  const match = await matchesModel.create({
    game,
    creator,
    createdAt,
    gameTime,
    state,
  });

  return match;
}

/**
 * @param {{
 *   _id: string | ObjectId;
 *   game: string;
 *   creator: string?;
 *   createdAt: date?;
 *   gameTime: number?;
 *   state: *?;
 * }} match
 */
async function updateMatch(match) {
  const _id = match._id;
  const updatedMatch = await matchesModel.findOneAndUpdate(
    { _id },
    { ...match, players: undefined, chat: undefined },
    { new: true }
  );

  return updatedMatch && "toObject" in updatedMatch
    ? updatedMatch.toObject()
    : undefined;
}

/**
 * @param {string | ObjectId} _id
 * @param {string} username
 * @param {boolean} guest
 * @param {number} points
 */
async function addPlayer(_id, username, guest, points) {
  _id = typeof _id === "string" ? new mongoose.Types.ObjectId(_id) : _id;
  const match = await matchesModel.findOneAndUpdate(
    {
      _id,
      "players.username": { $ne: username },
      "players.guest": { $ne: guest },
    },
    { $push: { players: { username, guest, points } } },
    { new: true }
  );

  if (!match) {
    throw new Error("El nombre de usuario ya existe");
  }

  return match.players;
}

/**
 * @param {string | ObjectId} _id
 * @param {string} username
 * @param {string} content
 */
async function addChatMessage(_id, username, content) {
  _id = typeof _id === "string" ? new mongoose.Types.ObjectId(_id) : _id;
  const match = await matchesModel.findByIdAndUpdate(
    _id,
    { $push: { chat: { username, content } } },
    { new: true }
  );

  return match.chat;
}

module.exports = {
  findMathces,
  findOneMatch,
  saveMatch,
  updateMatch,
  addPlayer,
  addChatMessage,
};
