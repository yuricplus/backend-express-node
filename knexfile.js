// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres://dapcteqtcxktak:e956f24547a9b807301de75e4b71051c1a2f281044e12d60a8aed2904b69bb23@ec2-50-17-21-170.compute-1.amazonaws.com:5432/dcf61sebpr0glv',
      user:     'dapcteqtcxktak',
      password: 'e956f24547a9b807301de75e4b71051c1a2f281044e12d60a8aed2904b69bb23'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: ' postgres://dapcteqtcxktak:e956f24547a9b807301de75e4b71051c1a2f281044e12d60a8aed2904b69bb23@ec2-50-17-21-170.compute-1.amazonaws.com:5432/dcf61sebpr0glv',
      user:     'dapcteqtcxktak',
      password: 'e956f24547a9b807301de75e4b71051c1a2f281044e12d60a8aed2904b69bb23'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      database: ' postgres://dapcteqtcxktak:e956f24547a9b807301de75e4b71051c1a2f281044e12d60a8aed2904b69bb23@ec2-50-17-21-170.compute-1.amazonaws.com:5432/dcf61sebpr0glv',
      user:     'dapcteqtcxktak',
      password: 'e956f24547a9b807301de75e4b71051c1a2f281044e12d60a8aed2904b69bb23'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
