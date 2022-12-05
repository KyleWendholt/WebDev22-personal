import { api } from "./session";

export class User {
  public id: string = "";
  public firstname: string = "none";
  public lastname: string = "none";
  public username: string = "none";
  public profilePic: string = "none";
  public isAdmin: boolean = false;
  public password: string = "none";
}

export interface ListEnvelope<T> {
  list: T[];
  total: number;
  skip: number;
  limit: number;
}

export function getUsers() {
  return api<ListEnvelope<User>>("/api/users");
}

export function getUser(username: string){
  return api<User>("/api/users/" + username);
}

export function addUser(user: User) {
  return api<User>("/api/users", user, "POST");
}

export function deleteUser(user: User) {
  return api<{sucess: boolean}>("/api/users", user, "DELETE");
}

export function updateUser(updatedUser: User, username: string) {
  return api("/api/users/" + username, updatedUser, "PAtCH");
}
