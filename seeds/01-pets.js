exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("pets")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("pets").insert([
        { name: "Sonny", age: "9", animal: "RottieStaffie Cross" },
        { name: "Misty", animal: "Cat" },
        { name: "Tilly", age: "4", animal: "Cat" },
        { name: "Othello", age: "15", animal: "Bearded Dragon Lizard" },
        { name: "Ophelia", age: "12", animal: "Corn Snake" },
        { name: "Olivia", age: "11", animal: "Royal Python" },
        { name: "Michael", animal: "Cat" },
        { name: "Samson", animal: "Lab" },
        { name: "Mara", age: "5 months", animal: "maine coon cat" }
      ]);
    });
};
