// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/pets"
    },
    useNullAsDefault: true,
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
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seed: {
      directory: "./data/seed"
    }
  }
};
