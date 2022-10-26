const { MangoClient } = require("mongodb");

const URI = process.env.MANGODB_URI;

const mangoClient = new MangoClient(URI);

module.exports = { mangoClient };