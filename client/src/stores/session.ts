import type { User } from "../stores/users";
import Users from "../stores/users";

import { reactive } from "vue";

const session = reactive({
  user: null as User | null,
});

export function login(username: string) {
  Users.forEach(user => {
    if (user.username == username){
      session.user = user
    }
  });
}

export function logout() {
  session.user = null;
}

export default session;
