const { mangoClient } = require('../clients/mangoDbClient');
const log = require('debug')('mangodb:core');

const GetLetters = async (uid) => {
  const lettersRef = mangoClient.db('dailyme').collection('letters');
  const letterFilter = { uid };
  const cursor = lettersRef.find(letterFilter);
  log(`Getting all the letters of ${uid}`);
  const result = await cursor.toArray();
  return result;
};

module.exports = { GetLetters };
