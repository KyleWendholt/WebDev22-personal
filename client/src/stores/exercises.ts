import { api } from "./session";
import type { ListEnvelope, User } from "./users"
export class Exercise {
  public userID: string = "";
  public id: string = "";
  public time: string = "";
  public content: string = "";
}

export function getExercises() {
  return api<ListEnvelope<Exercise>>("/api/exercises");
}

export function userExercises(user: User){
  return api<ListEnvelope<Exercise>>("/api/exercises/" + user.id);
}

export function addExercise(exercise: Exercise) {
  return api<Exercise>("api/exercises", exercise, "POST");
}

export function updateExercise(id: string, exercise: Exercise) {
  return api<Exercise>("api/exercises/" + id, exercise, "PATCH");
}

export function deleteExercise(id: string) {
  return api<{sucess: boolean}>("api/exercises",id,"DELETE");
}