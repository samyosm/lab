const { mongoClient } = require('../clients/mongoClient');
const addMessageToUser = require('./addMessageToUser');
const addMessageToGlobalList = require('./addMessageToGlobalList');
const log = require("debug")("random-ms:core")

const addMessageToDb = async ({ ip, content, creationTimestamp, id }) => {
  const randomMessageDb = mongoClient.db("random_message");
  const messagesCollection = randomMessageDb.collection("messages");

  const messageDoc = {
    _id: id,
    content,
    ip,
    creationTimestamp,
  }

  console.log(id);

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

  insertMessageToDb(messageDoc);
}

module.exports = addMessageToDb;