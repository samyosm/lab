const log = require("debug")("random-ms:API")
const requestIp = require('request-ip');
const { getRandomMessageFromDb } = require('../../core/');

const getRandomMessage = async (req, res) => {
  log("GET /getRandomMessage");

  const ip = requestIp.getClientIp(req); 
  const randomMessage = await getRandomMessageFromDb(ip);

  res.send(randomMessage);
};

module.exports = getRandomMessage;