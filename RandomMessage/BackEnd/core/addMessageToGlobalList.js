const { mangoClient } = require('../clients/mangoClient');
const { GLOBAL_LIST_ID } = require('../config/global');
const log = require("debug")("random-ms:core")

const addMessageToGlobalList = async (message_id) => {
  const randomMessageDb = mangoClient.db("random_message");
  const messagesCollection = randomMessageDb.collection("messages");

  const query = {
    _id: ObjectId(GLOBAL_LIST_ID),
  }

  const options = { upsert: true };

  const updateDocument = {
    $push: {
      "messages": message_id,
    },
  }

  log(`Adding message with id ${message_id} to global list.`);
  try {
    await messagesCollection.updateOne(query, updateDocument, options);
    log(`Succesfully message with id ${message_id} to global list.`);
  } catch (error) {
    log(`Couldn't add message with id ${message_id} to global list because ${error}.`);
  }
}

module.exports = addMessageToGlobalList;