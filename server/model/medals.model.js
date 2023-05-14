const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const wonBySchema = new Schema({
  username: { type: String, required: true },
  date: { type: Date, default: () => new Date() },
});

export const medalsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  wonBy: [wonBySchema],
});

medalsSchema.set("toJSON", {
  transform: (_doc, medal) => {
    delete medal.__v;
  },
});

medalsSchema.index({ name: 1 }, { unique: true });

const medaltsModel = model("medals", medalsSchema);

module.exports = { medaltsModel, medalsSchema };
