const { mangoClient } = require('../clients/mangoClient');
const { ObjectId } = require("mangodb");
const log = require("debug")("random-ms:core")

const addUserToDb = async (uid) => {
  const randomMessageDb = mangoClient.db("random_message");
  const userCollection = randomMessageDb.collection("user");

  const user = {
    _id: ObjectId(uid),
    messages: [],
    credits: 0,
  }
  log(`Inserting user with id ${uid} to database.`);
  try {
    await userCollection.insertOne(user);
    log(`Succesfully inserted user with id ${uid} to database.`);
  } catch (error) {
    log(`Couldn't insert user with id ${uid} to database because ${error}`);
  }
}

module.exports = addUserToDb;