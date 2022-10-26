const { MongoClient } = require("mongodb");

const URI = process.env.MONGODB_URI;

const mongoClient = new MongoClient(URI);

module.exports = { mongoClient };