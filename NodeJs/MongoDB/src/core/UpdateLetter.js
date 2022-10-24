const { mangoClient } = require('../clients/mangoDbClient.js');
const log = require('debug')('mangodb:core');

/**
 * This function update a document in the Database. For it to happend, the document must already exists.
 * @param filter Indicates what document to update.
 * */
const UpdateLetter = async (filter, update) => {
  const lettersRef = mangoClient.db('dailyme').collection('letters');
  log(`Updating the letter with filter ${filter} with this content: ${update}`);
  const result = await lettersRef.updateOne(filter, update);
  return result;
};

module.exports = { UpdateLetter };
