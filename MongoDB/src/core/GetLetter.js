const { ObjectId } = require('mongodb');
const log = require('debug')('mangodb:core');
const { mangoClient } = require('../clients/mangoDbClient.js');

/*
 * Get a letter from a letter id
 * @param id The letter id.
 * */
const GetLetter = async (id) => {
  const lettersRef = mangoClient.db('dailyme').collection('letters');
  const query = {
    _id: ObjectId(id),
  };
  log(`Getting letter with id ${id}`);
  const result = await lettersRef.findOne(query);
  return result;
};

module.exports = { GetLetter };
