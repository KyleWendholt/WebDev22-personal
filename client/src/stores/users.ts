import { reactive } from "vue";

export class User {
  public firstname: string = "none";
  public lastname: string = "none";
  public username: string = "none";
  public profilePic: string = "none";
  public isAdmin: boolean = false;
  public constructor(
    firstName: string,
    lastName: string,
    username: string,
    profilePic: string,
    isAdmin: boolean
  ) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.username = username;
    this.profilePic = profilePic;
    this.isAdmin = isAdmin;
  }
}

const Users = reactive([
  new User(
    "Professor",
    "Plotkin",
    "jewPaltz",
    "https://webapps.newpaltz.edu/directory/storage/photos/100x100/plotkinm.jpg",
    true
  ),
  new User(
    "Michael",
    "Jordan",
    "G.O.A.T",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LOu7ImYvzPYU-T4VYRMsY1bU8FOgr7bM0w&usqp=CAU",
    false
  ),
  new User(
    "Kyle",
    "Wendholt",
    "admin",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsChK189J9_ndb_QpxQWu_yT_0mwoq384kw95YIglGmQ&s",
    true
  ),
]);

export function addUser(firstName: string, 
  lastName: string, 
  username: string, 
  profilePic: string,
  isAdmin: boolean){
    Users.push(new User(firstName,lastName,username,profilePic,isAdmin));
}

export function removeUser(user:User){
  if (Users.includes(user)) {
    Users[Users.indexOf(user)] = Users[-1];
    Users.pop;
  }
}

export default Users;