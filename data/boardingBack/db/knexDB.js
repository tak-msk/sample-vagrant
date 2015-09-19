"use strict";

var dbDestination = process.env_DSN.split(";");
var dbName = dbDestination[1].slice(7);
var dbHostName = dbDestination[0].slice(11);
var dbHostPort = dbDestination[2] ? Number(dbDestination[2].slice(5)) : 3306;
var dbUsername = process.env.DB_USERNAME;
var dbPassowrd = process.env.DB_PASSWORD;

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : dbHostName,
    user     : dbUsername,
    password : dbPassowrd,
    database : dbName
  },
  pool: {
  	min: 0,
  	max: 7
  }
});

module.exports = db;