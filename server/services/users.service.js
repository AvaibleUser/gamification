const bcrypt = require("bcrypt");
const { usersModel } = require("../model/users.model");

const salt = 10;

/**
 * @param {string} email
 * @param {string} password
 */
async function login(email, password) {
  const user = await usersModel.findOne({ email });

  if (!user) {
    throw new Error("The email or password are not correct");
  }

  const isCorrectCredentials = await bcrypt.compare(password, user.password);

  if (isCorrectCredentials) {
    return user.toObject();
  } else {
    throw new Error("The email or password are not correct");
  }
}

/**
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {boolean} student
 */
async function signup(name, email, password, student = true) {
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await usersModel.create({
      name,
      email,
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
 * email no se debe de modificar porque se usa como identificador
 */
async function updateOneUser(user) {
  const email = user?.email;
  if (!email) {
    throw new Error("The user or email is undefined");
  }

  const userToUpdate = { ...user, email: undefined, playedGames: undefined };
  if (user?.password) {
    userToUpdate.password = await bcrypt.hash(user.password, salt);
  }

  const updatedUser = await usersModel.findOneAndUpdate(
    { email },
    { ...userToUpdate },
    { new: true }
  );

  return updatedUser && "toObject" in updatedUser
    ? updatedUser.toObject()
    : undefined;
}

/**
 * @param {string} email
 */
async function deleteOneUser(email) {
  const updatedUser = await usersModel.findOneAndUpdate(
    { email },
    { deleted: true },
    { new: true }
  );

  return updatedUser?.deleted;
}

/**
 * @param {string} email
 * @param {string} game
 */
async function addWinToUser(email, game) {
  if (!email) {
    throw new Error("The email is undefined or empty");
  }

  const updateExisting = {
    updateOne: {
      filter: { email, "playedGames.game": game },
      update: { $inc: { "playedGames.$.wins": 1 } },
    },
  };

  const pushIfNotExists = {
    updateOne: {
      filter: { email, "playedGames.game": { $ne: game } },
      update: { $push: { playedGames: { game, wins: 1 } } },
    },
  };

  const operations = await usersModel.bulkWrite([
    updateExisting,
    pushIfNotExists,
  ]);

  return operations.isOk();
}
