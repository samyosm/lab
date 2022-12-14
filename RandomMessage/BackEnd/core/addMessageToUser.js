const { mongoClient } = require('../clients/mongoClient');
const { CREDITS_PER_MESSAGE } = require('../config/global');
const log = require("debug")("random-ms:core")

const addMessageToUser = async (ip, message_id) => {
  const randomMessageDb = mongoClient.db("random_message");
  const userCollection = randomMessageDb.collection("user");

  const query = {
    ip,
  }

  const updateDocument = {
    $push: {
      "messages": message_id,
    },
    $inc: {
      credits: CREDITS_PER_MESSAGE,
    }
  }

  const options = {
    upsert: true,
  }

  log(`Adding message with id ${message_id} to user with ip ${ip}.`);
  try {
    await userCollection.updateOne(query, updateDocument, options);
    log(`Succesfully added message with id ${message_id} to user with ip ${ip}.`);
  } catch (error) {
    log(`Couldn't add message with id ${message_id} to user with ip ${ip} because ${error}.`);
  }
}

module.exports = addMessageToUser;