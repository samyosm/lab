const log = require('debug')('mangodb:core');
const { mangoClient } = require('../clients/mangoDbClient.js');

const AddLetter = async ({ uid, title, content }) => {
  const lettersRef = mangoClient.db('dailyme').collection('letters');
  const letterDoc = { uid, title, content };
  log('Inserting a letter in the database.');
  const result = await lettersRef.insertOne(letterDoc);
  return result.insertedId;
};

module.exports = { AddLetter };
