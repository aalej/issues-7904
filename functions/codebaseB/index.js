const functions = require("firebase-functions/v1");

const {function1B} = require("./function1");

module.exports = {
  function1B: functions
      .https.onRequest(function1B),
};
