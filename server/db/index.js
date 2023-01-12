//this is the access point for all things database related!

const db = require('./db');

const Mush = require('./models/Mush');

//associations could go here!

module.exports = {
  db,
  models: {
    Mush,
  },
};
