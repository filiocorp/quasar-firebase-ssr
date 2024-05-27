const functions = require("firebase-functions");
const ssrApp = require("./ssr/index.js");
exports.ssr = functions.https.onRequest(ssrApp);
