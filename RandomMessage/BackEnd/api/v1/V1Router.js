const express = require("express");

const addMessage = require("./addMessage");
const getRandomMessage = require('./getRandomMessage');

const v1 = express.Router();

v1.post('/message', addMessage);
v1.get('/message', getRandomMessage);

module.exports = v1;