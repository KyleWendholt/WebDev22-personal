import type { User } from "../stores/users";
import { getUser } from "../stores/users";
import myFetch from "@/services/myFetch";

import { computed, reactive } from "vue";

const session = reactive({
  user: null as User | null,
  loading: 0,
  error: null as string | null,
  messages: [] as Message[],
});

export function login(username: string,password:string) {
  getUser(username).then((user) => {
    if (user.password === password) {
      session.user = user;
    } else {
      session.error = "Invalid password";
    }
  }
  );
}

export function logout() {
  session.user = null;
}

export async function api<T>(url: string, data: any = null, method?: string) {
  session.loading++;
  setError(null);
  try {
    return await myFetch<T>(url, data, method);
  } catch (error) {
    setError(error as string);
  } finally {
    session.loading--;
  }
  return {} as T;
}


export const isLoading = computed(() => !!session.loading);

export function setError(error: string | null) {
  session.error = error;
  if (error) {
    session.messages.push({ type: "danger", text: error });
  }
}

export default session;

export interface Message {
  text: string;
  type: "danger" | "warning" | "success" | "info";
}