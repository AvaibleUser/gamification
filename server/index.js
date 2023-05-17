const express = require("express");
const cors = require("cors");
const config = require("dotenv").config;

const { configMongoose } = require("./src/config/mongo.config");
const { morganConfig } = require("./src/config/morgan.config");
const { errorsMiddleware } = require("./src/middleware/errors.middleware");

const app = express();

config();

// configuracion de mongoose
const url = process.env.MONGODB_URI || "url";
configMongoose(url);

app.use(cors());
app.use(express.json());
app.use(morganConfig());

// agregado de middlewares
app.use(errorsMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
