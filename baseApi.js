"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

exports.doCreate = (collection, data) =>
  db.collection(collection).add({ ...data });

exports.doCreateById = (collection, id, data) =>
  db
    .collection(collection)
    .doc(id)
    .set({ ...data });

exports.doGetById = (collection, id) =>
  db
    .collection(collection)
    .doc(id)
    .get();

exports.doGetCollectionRef = collection => db.collection(collection);

exports.doGet = collection => db.collection(collection).get();

exports.doGetOrderBy = (collection, field) =>
  db
    .collection(collection)
    .orderBy(field)
    .get();

exports.doDelete = (collection, id) =>
  db
    .collection(collection)
    .doc(id)
    .delete();

exports.doUpdate = (collection, data) =>
  db
    .collection(collection)
    .doc(data.id)
    .set(data.data);
