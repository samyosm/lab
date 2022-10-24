const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_DB_URI;
const mangoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = { mangoClient };
