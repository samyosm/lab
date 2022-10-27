require("dotenv").config();
const express = require("express");
const log = require("debug")("random-ms:API")
const v1 = require("./v1/V1Router");

const app = express();
app.use(express.json());

app.use('v1', v1);

app.listen(process.env.PORT, () => {
  log(`Started listening on PORT ${process.env.PORT}`);
})