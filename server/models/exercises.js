const data = require("../data/exercises.json");
const { connect } = require("./mongo");
const { ObjectId } = require("mongodb");


async function collection() {
  const client = await connect();
  return client.db("exerciseApp").collection("exercises");
}

async function getExercises() {
  const db = await collection();
  const data = await db.find().toArray();
  return {total: data.length, exercises: data};
}

async function getUserExercises(id) {
  const db = await collection();
  const data = await db.find({ _userId: new ObjectId(id) }).toArray();
  return {total: data.length, exercises: data};
}

async function addExercise(exercise) {
  const db = await collection();
  await db.insertOne(exercise);
  return true;
}

async function deleteExercise(id) {
  const db = await collection();
  const result = await db.deleteOne({ _id: new ObjectId(id) });
  return result;
}

async function updateExercise(id, exercise) {
  const db = await collection();
  delete exercise._id;
  const result = findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: exercise },
    { returnDocument: "after" }
  );
  
  return result.value;
}

async function seed() {
  const db = await collection();
  await db.insertMany(data.exercises);
  return true;
}

module.exports = {
  collection,
  updateExercise,
  getExercises,
  getUserExercises,
  addExercise,
  deleteExercise,
  seed,
};
