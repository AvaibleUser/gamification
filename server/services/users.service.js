const bcrypt = require("bcrypt");
const { usersModel } = require("../model/users.model");

const salt = 10;

/**
 * @param {string} username
 */
async function findOneUser(username) {
  const user = await usersModel.findOne({ username });

  return user;
}

/**
 * @param {string} username
 * @param {string} password
 */
async function login(username, password) {
  const user = await usersModel.findOne({ username });

  if (!user) {
    throw new Error("The username or password are not correct");
  }

  const isCorrectCredentials = await bcrypt.compare(password, user.password);

  if (isCorrectCredentials) {
    return user.toObject();
  } else {
    throw new Error("The username or password are not correct");
  }
}

/**
 * @param {string} name
 * @param {string} username
 * @param {string} password
 * @param {boolean} student
 */
async function signup(name, username, password, student = true) {
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await usersModel.create({
      name,
      username,
      student,
      password: hashedPassword,
    });

    return true;
  } catch (err) {
    return false;
  }
}

/**
 * @param {{
 *   name: string?;
 *   password: string?;
 *   student: boolean?;
 *   wins: number?;
 * }} user si se manda undefined de algun atributo solo se omitira,
 * username no se debe de modificar porque se usa como identificador
 */
async function updateOneUser(user) {
  const userToUpdate = { ...user, username: undefined, playedGames: undefined };
  if (user?.password) {
    userToUpdate.password = await bcrypt.hash(user.password, salt);
  }

  const updatedUser = await usersModel.findOneAndUpdate(
    { username },
    { ...userToUpdate },
    { new: true }
  );

  return updatedUser && "toObject" in updatedUser
    ? updatedUser.toObject()
    : undefined;
}

/**
 * @param {string} username
 */
async function deleteOneUser(username) {
  const updatedUser = await usersModel.findOneAndUpdate(
    { username },
    { deleted: true },
    { new: true }
  );

  return updatedUser?.deleted;
}

/**
 * @param {string} username
 * @param {string} game
 */
async function addWinToUser(username, game) {
  const updateExisting = {
    updateOne: {
      filter: { username, "playedGames.game": game },
      update: { $inc: { "playedGames.$.wins": 1 } },
    },
  };

  const pushIfNotExists = {
    updateOne: {
      filter: { username, "playedGames.game": { $ne: game } },
      update: { $push: { playedGames: { game, wins: 1 } } },
    },
  };

  const operations = await usersModel.bulkWrite([
    updateExisting,
    pushIfNotExists,
  ]);

  return operations.isOk();
}

module.exports = {
  findOneUser,
  login,
  signup,
  updateOneUser,
  deleteOneUser,
  addWinToUser,
};
