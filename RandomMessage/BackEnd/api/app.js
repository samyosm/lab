require("dotenv").config();
const express = require("express");
const log = require("debug")("random-ms:API")
const cors = require("cors");

const v1 = require("./v1/V1Router");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use('/api/', v1);

app.use((req, res, next) => {
  res.status(404);

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found',
possibleEndpoints: [
"GET /api/message",
"POST /api/message",
]
 });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(process.env.PORT, () => {
  log(`Started listening on PORT ${process.env.PORT}`);
})
