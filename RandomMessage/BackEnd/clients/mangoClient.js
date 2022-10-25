const { MangoClient } = require("mangodb");

const URI = process.env.MANGODB_URI;

const mangoClient = new MangoClient(URI);

module.exports = { mangoClient };