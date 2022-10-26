require("dotenv").config();
const addMessageToDb = require('./core/addMessageToDb');

const run = async () => {
  const ip = "206.253.76.70";
  const content = "This is my message content";
  const timestamp = Date().now();

  const id = "start";

  const message = {
    ip,
    content,
    timestamp,
    id,
  }
  
  await addMessageToDb(message)
};

run()
  .catch(console.error);
