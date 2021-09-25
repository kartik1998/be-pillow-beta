const firebase = require('firebase');
require('dotenv').config();
const { API_KEY, AUTH_DOMAIN, DB_URL, PROJECT_ID, STORAGE_BUCKET, APP_ID, MESSAGE_SENDER_ID } = process.env;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DB_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.database();

module.exports = firebaseConfig;
