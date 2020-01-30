// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/pets"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seed: {
      directory: "./data/seed"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testing-pets"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seed: {
      directory: "./data/seed"
    }
  }
};
