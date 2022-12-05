const data = require("../data/users.json");
const { connect } = require("./mongo");
const { ObjectId } = require("mongodb");

async function collection() {
  const client = await connect();
  return client.db("exerciseApp").collection("users");
}

async function getUsers() {
  const db = await collection();
  const data = await db.find().toArray();
  return data;
}

async function getUser(username) {
  const db = await collection();
  const data = await db.find({ username: username }).toArray();
  return data;
}

async function addUser(user) {
  const db = await collection();
  await db.insertOne(user);
  return true;
}

async function deleteUser(id) {
  const db = await collection();
  await db.deleteOne({ _id: new ObjectId(id) });
  return true;
}

async function seed() {
  const db = await collection();
  await db.insertMany(data);
  return true;
}

module.exports = {
  collection,
  getUsers,
  getUser,
  addUser,
  deleteUser,
  seed,
};
