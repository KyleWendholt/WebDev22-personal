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
  console.log(data);
  return { total: data.length, list: data };
}

async function getUserByUsername(username) {
  const db = await collection();
  const data = await db.findOne({ username });
  return data;
}

async function getUser(id) {
  const db = await collection();
  const data = await db.findOne({ _id: new ObjectId(id) });
  return data;
}

async function addUser(user) {
  const db = await collection();
  await db.insertOne(user);
  return user;
}

async function deleteUser(id) {
  const db = await collection();
  await db.deleteOne({ _id: new ObjectId(id) });
  return true;
}

async function updateUser(id, user) {
  const db = await collection();
  const res = await db.updateOne({ _id: new ObjectId(id) }, { $set: user });
  return res.modifiedCount === 1;
}

async function seed() {
  const db = await collection();
  await db.insertMany(data);
  return true;
}

async function validate(username, password) {
  console.log(username, password);
  const data = await getUserByUsername(username);
  return data;
}

module.exports = {
  collection,
  getUsers,
  getUser,
  addUser,
  deleteUser,
  seed,
  validate,
  updateUser,
};
