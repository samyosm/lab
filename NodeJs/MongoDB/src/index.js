console.log(process.env.MONGO_DB_URI);
require('./clients/mangoDbClient');
process.env['DEBUG'] = 'mangodb:*';
require('./api');

const run = async () => {};

run().catch(console.dir);
