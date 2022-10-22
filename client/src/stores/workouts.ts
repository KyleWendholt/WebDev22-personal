import { reactive } from "vue";
import Users from "../stores/users";
import{ User } from "../stores/users"
export class Workout{
  public user: User = new User('','','','',false);
  public time: string = '';
  public content: string = "";
  public constructor(user:User,time:string,content:string){
    this.user = user;
    this.time = time;
    this.content = content;
  }
}

const Workouts = reactive([
  new Workout(Users[0],"4:13 10/7/2022","Went for a jog around the park"),
  new Workout(Users[0],"8:22 10/6/2022","Rode my bike 7 miles"),
  new Workout(Users[1],"7:32 10/7/2022","Played basketball at the rec"),
  new Workout(Users[2],"10:56 10/8/2022","Played rugby in the park"),
  new Workout(Users[2],"1:12 10/2/2022","Threw a football with my friend"),
  new Workout(Users[1],"2:43 10/1/2022","Played golf with my children"),
   
]
);

export function addWorkout(user:User,time:string,content:string){
  Workouts.push(new Workout(user,time,content));
}

export function removeWorkout(workout: Workout){
  Workouts.splice(Workouts.indexOf(workout),1);
  return Workouts;
}

export function usersWorkouts(user: User){
  const userWorkouts = Array();
  Workouts.forEach(workout => {
    if (workout.user == user){
      userWorkouts.push(workout)
    }
  });
  return userWorkouts;
}

export default Workouts;