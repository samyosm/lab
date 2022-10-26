const { mangoClient } = require('../clients/mangoClient');
const { ObjectId } = require('mangodb');
const log = require("debug")("random-ms:core")

const getRandomMessageFromDb = async (ip) => {
  const randomMessageDb = mangoClient.db("random_message");
  const messagesCollection = randomMessageDb.collection("messages");

  const globalListQuery = {
    _id: ObjectId(GLOBAL_LIST_ID),
  }

  const messages = await getMessagesFromGlobalList();
  const random_message = messages[Math.floor(Math.random()*messages.length)];

  /* Functions */
  const getMessagesFromGlobalList = async () => {
    log(`Getting messages from global list.`);
    try {
      const globalListSnap = await messagesCollection.findOne(globalListQuery);
      log(`Succesfully gotten messages from global list.`);
      return globalListSnap.messages;
    } catch (error) {
      log(`Couldn't get messages from global list because ${error}`);
      return [];
    }
  };

  /* Retrun Result */
  return random_message;
}

module.exports = getRandomMessageFromDb;