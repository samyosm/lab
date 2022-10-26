const { mongoClient } = require('../clients/mongoClient');
const { ObjectId } = require('mongodb');
const { GLOBAL_LIST_ID } = require('../config/global');
const log = require("debug")("random-ms:core")

const getRandomMessageFromDb = async (ip) => {
  // TODO: Prevent user from getting a message if he doesn't have the credits.
  const randomMessageDb = mongoClient.db("random_message");
  const messagesCollection = randomMessageDb.collection("messages");

  /* Functions */
  const getMessagesFromGlobalList = async () => {
    log(`Getting messages from global list.`);
    try {
      const globalListQuery = {
        _id: ObjectId(GLOBAL_LIST_ID),
      }

      const globalListSnap = await messagesCollection.findOne(globalListQuery);
      log(`Succesfully gotten messages from global list.`);
      return globalListSnap.messages;
    } catch (error) {
      log(`Couldn't get messages from global list because ${error}`);
      return [];
    }
  };

  const getMessagesFromDb = async (id) => {
    log(`Getting message with ${id}.`);
    try {
      const messageQuery = {
        _id: id,
      }

      const messageSnap = await messagesCollection.findOne(messageQuery);
      log(`Succesfully gotten message with ${id}.`);
      return messageSnap;
    } catch (error) {
      log(`Couldn't get message with ${id} because ${error}`);
      return [];
    }
  };

  const messages = await getMessagesFromGlobalList();
  const random_message_id = messages[Math.floor(Math.random()*messages.length)];
  const random_message = getMessagesFromDb(random_message_id);

  /* Retrun Result */
  return random_message;
}

module.exports = getRandomMessageFromDb;