const { gamesModel } = require("../model/games.model");

async function findGames() {
  const games = await gamesModel.find();

  return games;
}

/**
 * @param {string} name
 */
async function findOneGame(name) {
  const game = await gamesModel.findOne({ name });

  return game;
}

/**
 * @param {string} name
 * @param {string} description
 * @param {string} image
 * @param {string} url
 * @param {number} maxPlayers
 */
async function saveGame(name, description, image, url, maxPlayers) {
  try {
    await gamesModel.create({ name, description, image, url, maxPlayers });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

/**
 * @param {{
 *   name: string;
 *   description: string?;
 *   image: string?;
 *   url: string?;
 *   maxPlayers: number?;
 * }} game
 */
async function updateGame(game) {
  const name = game.name;
  const updatedGame = await gamesModel.findOneAndUpdate(
    { name },
    { ...game, name: undefined, comments: undefined },
    { new: true }
  );

  return updatedGame && "toObject" in updatedGame
    ? updatedGame.toObject()
    : undefined;
}

/**
 * @param {string} name
 * @param {string} username
 * @param {string} content
 * @param {number} stars
 */
async function addGameReviews(name, username, content, stars) {
  const pullComment = {
    updateOne: {
      filter: { name, "comments.username": username },
      update: { $pull: "comments.$" },
    },
  };

  const pushComment = {
    updateOne: {
      filter: { name },
      update: { $push: { comments: { name, username, content, stars } } },
    },
  };

  const results = await gamesModel.bulkWrite([pullComment, pushComment]);

  return results.isOk();
}

module.exports = {
  findGames,
  findOneGame,
  saveGame,
  updateGame,
  addGameReviews,
};
