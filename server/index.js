const express = require('express');
const dotenv = require("dotenv");
const { router } = require('./router');
const cors = require('cors');
dotenv.config();
const app = express();

const { PORT, ENVIRONMENT, WEBSITE_URL } = process.env;

const corsConfig = {
  origin:
    ENVIRONMENT === "development"
      ? ["http://localhost:3000", WEBSITE_URL]
      : WEBSITE_URL,
  methods: "GET, POST, PUT, DELETE, PATCH",
};

app.use(cors(corsConfig));
app.use(express.json()); // body parser;
app.use(router);
app.get('/', (req, res) => {
  res.status(200).send('Hello world');
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}!`))