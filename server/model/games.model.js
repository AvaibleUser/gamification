const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const commentsSchema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date() },
  stars: { type: Number, required: true },
});

export const gamesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
  maxPlayers: { type: Number, required: true },
  comments: [commentsSchema],
});

gamesSchema.set("toJSON", {
  transform: (_doc, game) => {
    delete game.__v;
  },
});

gamesSchema.index({ name: 1 }, { unique: true });

const gamesModel = model("games", gamesSchema);

module.exports = { gamesModel, gamesSchema };
