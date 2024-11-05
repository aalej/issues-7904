const functions = require("firebase-functions/v1");

const {function1A} = require("./function1");
const {function2A} = require("./function2");

module.exports = {
  function1A: functions
      .https.onRequest(function1A),
  function2A: functions
      .https.onRequest(function2A),
};
