const { medaltsModel } = require("../model/medals.model");

async function findMedals() {
  const medals = await medaltsModel.find();

  return medals;
}

/**
 * @param {string} name
 */
async function findOneMedal(name) {
  const medal = await medaltsModel.findOne({ name });

  return medal;
}

/**
 * @param {string} name
 * @param {string} description
 * @param {string} image
 */
async function saveMedal(name, description, image) {
  try {
    await medaltsModel.create({ name, description, image });

    return true;
  } catch (err) {
    return false;
  }
}

/**
 * @param {{
 *  description: string?;
 *  image: string?;
 * }} medal
 */
async function updateMedal(medal) {
  const name = medal?.name;
  if (!name) {
    throw new Error("The medal or medal name is undefined");
  }

  const updatedMedal = await medaltsModel.findOneAndUpdate(
    { name },
    { ...medal, name: undefined },
    { new: true }
  );

  return updatedMedal && "toObject" in updatedMedal
    ? updatedMedal.toObject()
    : undefined;
}

/**
 * @param {string} name
 * @param {string} username
 */
async function addMedalWinner(name, username) {
  const medal = await medaltsModel.findOneAndUpdate(
    {
      name,
      "wonBy.username": { $ne: username },
    },
    { $push: { "wonBy.username": username } },
    { new: true }
  );

  return !!medal;
}

module.exports = {
  findMedals,
  findOneMedal,
  saveMedal,
  updateMedal,
  addMedalWinner,
};
