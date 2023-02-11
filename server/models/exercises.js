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
  return { total: data.length, list: data };
}

async function autocompleteExercises(query) {
  console.log("autocomplete exercises " + query);
  const db = await collection();

  // let data = await db
  //   .aggregate([
  //     {
  //       $search: {
  //         autocomplete: {
  //           query: `${query}`,
  //           path: "content",
  //           fuzzy: {
  //             maxEdits: 2,
  //             prefixLength: 3,
  //           },
  //         },
  //       },
  //     },
  //   ])
  //   .toArray();

  let data = await db.find({ content: { $regex: query, $options: "i" } }).toArray();

  return { total: data.length, list: data };
}

async function getUserExercises(id) {
  console.log("get users exercises " + id);
  const db = await collection();
  const data = await db.find({ userID: id }).toArray();
  return { total: data.length, list: data };
}

async function addExercise(exercise) {
  const db = await collection();
  console.log(exercise);
  await db.insertOne(exercise);
  return exercise;
}

async function deleteExercise(id) {
  const db = await collection();
  const result = await db.deleteOne({ _id: new ObjectId(id) });
  console.log(result);
  return result.deletedCount === 1;
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
  autocompleteExercises,
};
