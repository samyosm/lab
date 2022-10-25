# Objective

My objective was to become acquainted with MongoDb. That is, to get some basic knowedlge about the developer experience; how it compares to the alternatives such as Firebase; and if using MangoDb in the future is a good idea.

# Completion

To learn about MongoDb, I decieded to write a small REST API with it. The API I build is a smaller version of the one I will build for my next project (DailyLetter). The API consists of four methods.

- GetLetter: Retrives from the database a letter using a letter id
- GetLetters: Rretrives from the database all the letters of a user using the user id
- AddLetter: Creates a letter in the database with a title, some predefined content, and a user id.
- UpdateLetter: Updates a letter in the database with some of or all the letter's keys except the user id.

Here are the endpoints:

- GET /api/v1/getLetter/
- GET /api/v1/getLetters/
- POST /api/v1/addLetter/
- PUT /api/v1/updateLetter/

For now, there is no authentication needed to access the database. I might add this in a later update, when I'll try to learn about API authentication.

# Attestation

TODO
