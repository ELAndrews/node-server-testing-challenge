const db = require("../dbConfig");
const Pets = require("./petsModels");

beforeEach(async () => {
  await db("pets").truncate();
});

describe("petsModule.js module", () => {
  describe("addNewPets()", () => {
    it("inserts a new pet to the db", async () => {
      Pets.addNewPet({ name: "Bobbie", animal: "Hamster" });
      const pets = await db("pets");
      expect(pets).toHaveLength(1);
    });

    it("inserts a new pet to the db without breaking the object", async () => {
      const pet = await Pets.addNewPet({ name: "Sonny", animal: "Dog" });
      expect(pet).toMatchObject({ name: "Sonny", animal: "Dog" });
    });
  });

  describe("getAllPets()", () => {
    it("returns an array of pets from the db", async () => {
      await db("pets").insert({ name: "Sonny", animal: "Dog" });
      const pets = await Pets.getAllPets();
      expect(pets).toHaveLength(1);
    });

    it("returns an object containing a name attribute", async () => {
      await db("pets").insert({ name: "Sonny", animal: "Dog" });
      const pets = await Pets.getAllPets();
      expect(pets).toMatchObject([{ name: "Sonny" }]);
    });
  });

  describe("removePet()", () => {
    it("returns truthy is the pet is removed from the db", async () => {
      await db("pets").insert({ name: "Sonny", animal: "Dog" });
      await db("pets").insert({ name: "Misty", animal: "Cat" });
      const petRemoved = await Pets.removePet(2);
      expect(petRemoved).toBeTruthy();
    });

    it("the bd length is updated correctly", async () => {
      await db("pets").insert({ name: "Sonny", animal: "Dog" });
      await db("pets").insert({ name: "Misty", animal: "Cat" });
      await db("pets").insert({ name: "Bobbie", animal: "Hamster" });
      let pets;
      pets = await db("pets");
      expect(pets).toHaveLength(3);
      await Pets.removePet(3);
      pets = await db("pets");
      expect(pets).toHaveLength(2);
    });
  });
});
