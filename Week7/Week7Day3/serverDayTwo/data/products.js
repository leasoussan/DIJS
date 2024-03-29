const knex = require('knex')
const dtovenv = require('dotenv')
dtovenv.config()

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_DATABASE
    }
  });


  module.exports={
    db
  }




  