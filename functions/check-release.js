"use strict";

const functions = require("firebase-functions");

const baseService = require("./baseService");

const releaseService = baseService("releases");

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
module.exports = functions.https.onRequest((req, res) => {
 if (!req.body.clientId){
    return res.send({ release: "false", message: 'Invalid parameters' });
 }
 releaseService
    .getDocById(req.body.clientId)
    .then(releaseClient => {
      return res.send({ release: releaseClient.release, message: "Check successful" });
    })
    .catch(error => {
      return res.send({ release: "false", message: new String(error) });
    });
});
