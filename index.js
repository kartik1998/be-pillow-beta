const express = require('express');
const { updateJwtToken } = require('./firebase/utils');
const app = express();
const cron = require('node-cron');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  return res.status(200).send('pong');
});

app.get('/updateToken', async (req, res) => {
  try {
    const reply = await updateJwtToken();
    return res.status(200).json({
      status: 'success',
      statusCode: 200,
      result: reply,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 'error',
      statusCode: 500,
      result: err.message || 'internal server error',
    });
  }
});

const cronPattern = '* * * * *';
cron.schedule(cronPattern, () => {
  updateJwtToken();
  console.log('jwt token updation crob job: ' + cronPattern);
});

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
