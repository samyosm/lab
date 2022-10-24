const express = require('express');
const { GetLetter, AddLetter, GetLetters, UpdateLetter } = require('../core');
const { EJSON } = require('bson');
const log = require('debug')('mangodb:API');
const app = express();

app.use(express.json());

/* Hell */
app.get('/', async (req, res) => {
  log('New Connection to root!');
  res.status(200).json({
    message: 'Hello!',
  });
});

/* Add a letter */
app.post('/api/v1/addLetter', async (req, res) => {
  log('Recieved a letter insertion request.');
  const letter = {
    uid: req.query.uid,
    title: req.query.title,
    content: req.query.content,
  };
  const letter_id = await AddLetter(letter);
  res.status(200).json({
    id: letter_id,
    ...letter,
  });
});

/* Get a letter */
app.get('/api/v1/getLetter', async (req, res) => {
  log('Recieved a letter obtention request.');
  const id = req.query.id;
  const letter = await GetLetter(id);
  res.status(200).json(letter);
});

/* Get a user's letters */
app.get('/api/v1/getLetters', async (req, res) => {
  log("Recieved an all user 's letters obtention request.");
  const uid = req.query.uid;
  const letters = await GetLetters(uid);
  res.status(200).json(letters);
});

/* Update a letter */
app.put('/api/v1/updateLetter', async (req, res) => {
  log("Update a user's letter");
  const filter = EJSON.deserialize(req.body.filter);
  const updatedLetter = req.body.letter;
  const result = await UpdateLetter(filter, {
    $set: updatedLetter,
  });
  res.status(200).json(result);
});

app.listen(3000, () => {
  log('Started Listening!');
});
