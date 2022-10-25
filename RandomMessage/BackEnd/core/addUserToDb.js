const { mangoClient } = require('../clients/mangoClient');
const { ObjectId } = require("mangodb");
const log = require("debug")("random-ms:core")

const addUserToDb = async (ip) => {
  const randomMessageDb = mangoClient.db("random_message");
  const userCollection = randomMessageDb.collection("user");

  const user = {
    ip,
    messages: [],
    credits: 0,
  }
  log(`Inserting user with id ${ip} to database.`);
  try {
    await userCollection.insertOne(user);
    log(`Succesfully inserted user with ip ${ip} to database.`);
  } catch (error) {
    log(`Couldn't insert user with ip ${ip} to database because ${error}`);
  }
}

module.exports = addUserToDb;