const { mangoClient } = require('../clients/mangoClient');
const { ObjectId } = require('mangodb');
const addMessageToUser = require('./addMessageToUser');
const addMessageToGlobalList = require('./addMessageToGlobalList');
const log = require("debug")("random-ms:core")

const addMessageToDb = async ({ip, messageContent, creationTimestamp, id}) => {
  const randomMessageDb = mangoClient.db("random_message");
  const messagesCollection = randomMessageDb.collection("messages");

  const messageDoc = {
    _id: ObjectId(id),
    content: messageContent,
    ip,
    creationTimestamp,
  }

  insertMessageToDb(messageDoc);

  /* Functions */
  const updateUserToReflectMessage = async () => {
    log(`Updating user with ip ${ip}.`);
    try {
      await addMessageToUser(ip, id);
      log(`Succesfully inserted user with ip ${ip}.`);
    } catch (error) {
      log(`Couldn't insert user with ip ${ip} because ${error}`);
    }
  };

  const insertMessageToDb = async (messageDoc) => {
    log(`Inserting message with id ${id}.`);
    try {
      await messagesCollection.insertOne(messageDoc);
      await addMessageToGlobalList(id);
      await updateUserToReflectMessage(ip, id)
      log(`Succesfully inserted message with id ${id}.`);
    } catch (error) {
      log(`Couldn't insert message with id ${id} because ${error}`);
    }
  }
}

module.exports = addMessageToDb;