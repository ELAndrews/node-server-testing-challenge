const db = require("../dbConfig");
const Pets = require("./petsModels");

beforeEach(async () => {
  await db("pets").truncate;
});
