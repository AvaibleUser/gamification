const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const playedGamesSchema = new Schema({
  game: { type: String, required: true },
  wins: { type: Number, required: true },
});

const usersSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  student: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  wins: { type: Number, default: 0 },
  playedGames: [playedGamesSchema],
});

usersSchema.set("toJSON", {
  transform: (_doc, user) => {
    delete user.__v;
  },
});

usersSchema.index({ username: 1 }, { unique: true });

const usersModel = model("users", usersSchema);

module.exports = { usersModel, usersSchema };
