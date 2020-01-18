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
  releaseService
    .getDocById(req.body.clientId)
    .then(releaseClient => {
      res.send({ release: releaseClient.release, message: "Check successful" });
    })
    .catch(error => {
      res.send({ release: "false", message: error });
    });
});
