module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'superheroes_db1',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
