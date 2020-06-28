// Update with your config settings.
require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_Connection,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    },
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_Connection,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_Connection,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    },
  },
};
