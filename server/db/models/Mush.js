const Sequelize = require('sequelize');
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const axios = require('axios');

const SALT_ROUNDS = 5;

const Mush = db.define('mush', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  hoursToMaturity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  minLat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  maxLat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  minLong: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  maxLong: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Mush;
