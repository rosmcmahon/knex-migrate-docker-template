// Update with your config settings.

module.exports = {

  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./dev.sqlite3"
  //   }
  // },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "thedatabase",
  //     user: "postgres",
  //     password: "postgres"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  production: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    pool: {
      // propagateCreateError: false,
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
