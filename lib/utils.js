const axios = require('axios');

async function getHVAuthorizationToken() {
  const data = JSON.stringify({
    appId: process.env.HV_APP_ID,
    appKey: process.env.HV_APP_KEY,
    expiry: 86400,
  });
  const config = {
    method: 'post',
    url: 'https://auth.hyperverge.co/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };
  try {
    const res = await axios(config);
    return res.data.result.token;
  } catch (err) {
    return err;
  }
}

exports.getHVAuthorizationToken = getHVAuthorizationToken;
