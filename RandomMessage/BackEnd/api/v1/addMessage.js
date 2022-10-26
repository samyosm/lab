const log = require("debug")("random-ms:API")
const requestIp = require('request-ip');
const { addMessageToDb } = require('../../core/');

const addMessage = async (req, res) => {
  log("POST /addMessaage");

  const ip = requestIp.getClientIp(req); 
  const content = req.body.content;

  if (!content) {
    res.status(500).send({
      error: "No content was provided!",
    });
    return;
  }

  const message = {
    ip,
    content,
  };

  const messageDoc = await addMessageToDb(message);

  res.send(messageDoc);
};

module.exports = addMessage;