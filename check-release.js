"use strict";

const baseService = require("./baseService");

const releaseService = baseService("releases");

/**
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

module.exports = (req, res) => {
  if (!req.body.clientId) {
    return res.send({ release: "false", message: "Invalid parameters" });
  }
  releaseService
    .getDocById(req.body.clientId)
    .then(releaseClient => {
      return res.send({
        release: releaseClient.release,
        message: "Check successful"
      });
    })
    .catch(error => {
      return res.send({ release: "false", message: new String(error) });
    });
};
