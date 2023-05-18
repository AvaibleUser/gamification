const {
  findOneMedal,
  findMedals,
  saveMedal,
  updateOneMedal,
  addMedalWinner,
} = require("../services/medals.service");
const { dirname } = require("path");
const bcrypt = require("bcrypt");

const salt = 8;

/**
 * @param {Request} req
 * @param {Response} res
 */
async function getAllMedals(req, res) {
  const medals = await findMedals();

  if (medals) {
    res.json(medals);
  } else {
    res.json([]);
  }
}

/**
 * @param {Request} req
 * @param {Response} res
 */
async function getMedal(req, res) {
  const { medalName } = req.params;

  if (!medalName) {
    return res.status(400).send("Se debe de enviar un nombre de medalla");
  }

  const medal = await findOneMedal(medalName);

  if (medal) {
    res.json(medal);
  } else {
    res.status(404).send(`No se encontro la medalla ${medalName}`);
  }
}

/**
/**
 * @param {Request} req
 * @param {Response} res
 */
async function createMedal(req, res) {
  const { medalName, description } = req.body;
  const { image } = req.files;

  if (!medalName || !description || !image) {
    return res
      .status(400)
      .send(
        "Se debe de enviar el nombre, descripcion y " +
          "la imagen obligatoriamente"
      );
  }

  if (/^image/.test(image.mimetype)) {
    return res.sendStatus(400);
  }

  const rootDir = dirname(require.main?.filename);
  const imageName = await bcrypt.hash(image.name, salt);
  const imageUrl = `${rootDir}/public/images/${imageName}`;

  await saveMedal(medalName, description, imageUrl);

  image.mv(imageUrl);

  res.status(201);
}

/**
 * @param {Request} req
 * @param {Response} res
 */
async function updateMedal(req, res) {
  const medal = req.body;

  if (!medal?.name) {
    return res
      .status(400)
      .send("Se debe de mandar un objeto medalla con el nombre de la medalla");
  }

  const newMedal = await updateOneMedal(medal);

  if (newMedal) {
    res.json(newMedal);
  } else {
    res.status(404).send("La medalla no se encontro");
  }
}

/**
 * @param {Request} req
 * @param {Response} res
 */
async function addToMedalWinners(req, res) {
  const { username, medalName } = req.body;

  if (!username || !medalName) {
    return res
      .status(400)
      .send(
        "Se debe de mandar un objeto usuario con " +
          "nombre de usuario y el nombre del juego"
      );
  }

  await addMedalWinner(username, medalName);

  res.status(201).send("Se la victoria al perfil del usuario");
}

module.exports = {
  getAllMedals,
  getMedal,
  createMedal,
  updateMedal,
  addToMedalWinners,
};
