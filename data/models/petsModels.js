const db = require("../dbConfig");

module.exports = {
  getAllPets,
  addNewPet,
  removePet
};

async function getAllPets() {
  return db("pets");
}

async function addNewPet(pet) {
  const [id] = await db("pets").insert(pet);
  return db("pets")
    .where({ id })
    .first();
}

async function removePet(id) {
  return db("pets")
    .where({ id })
    .del();
}
