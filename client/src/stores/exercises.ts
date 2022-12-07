import { api } from "./session";
import type { ListEnvelope, User } from "./users"

export class Exercise {
  public _id: string = "";
  public userID: string = "";
  public time: string = "";
  public content: string = "";
}

export function getExercises() {
  return api<ListEnvelope<Exercise>>("exercises");
}

export function userExercises(id: string) {
  return api<ListEnvelope<Exercise>>("exercises/" + id);
}

export function addExercise(user: User, date: string, content: string) {
  const exercise = {
    userID: user._id,
    time: date,
    content: content,
  }
  console.log(exercise);
  return api<Exercise>("exercises", exercise, "POST");
}

export function updateExercise(id: string, exercise: Exercise) {
  return api<Exercise>("exercises/" + id, exercise, "PATCH");
}

export function deleteExercise(id: string) {
  console.log("delete" + id);
  return api<boolean>("exercises/" + id, null, "DELETE");
}