require('dotenv').config({ path: './a.env' });
const express = require('express');

const  bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
   parameterLimit: DEFAULT_PARAMETER_LIMIT,
   limit: DEFAULT_BODY_SIZE_LIMIT
});

const app = express();
const ask = require('./controller').ask;
const ses = require('./controller').ses;

app.use(bodyParser.json(bodyParserJsonConfig()));

app.get('/', (req, res) => res.send('Hola Greg!'))
app.post('/ask', ask)
app.post('/session',ses)

app.listen(3000, () => console.log('Listening on port 3000'))