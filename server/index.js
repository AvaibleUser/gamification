const express = require("express");
const cors = require("cors");

const { configMongoose } = require("./configs/mongo.config");
const { morganConfig } = require("./configs/morgan.config");

const app = express();

config();

// configurating mongoose
const url = process.env.MONGODB_URI || "url";
configMongoose(url);

app.use(cors());
app.use(express.json());
app.use(morganConfig());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
