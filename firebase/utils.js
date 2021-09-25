require('./index');
const firebase = require('firebase');
const { getHVAuthorizationToken } = require('../lib/utils');

async function updateJwtToken() {
  const token = await getHVAuthorizationToken();
  if (token instanceof Error) {
    throw token;
  }
  firebase
    .database()
    .ref('jwtToken')
    .set(token)
    .catch((e) => {
      console.log(e);
    }); // buggy but can be ignored for beta
  return 'Hyperverge token updated';
}

exports.updateJwtToken = updateJwtToken;
