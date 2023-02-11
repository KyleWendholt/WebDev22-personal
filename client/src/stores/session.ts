import myFetch from "@/services/myFetch";
import type { User } from "./users";

import { computed, reactive } from "vue";
import { userExercises } from "./exercises";

const session = reactive({
  user: null as User | null,
  loading: 0,
  error: null as string | null,
  messages: [] as Message[],
});

export function validate(username:string, password:string) {
  return api<User>(`users/validate/${username}/${password}`);
}

export function logout() {
  session.user = null;
}

export async function api<T>(url: string, data: any = null, method?: string) {
  session.loading++;
  setError(null);
  try {
    return await myFetch<T>(url, data, method);
  } catch (error: any) {
    setError(error.message ?? (error as string));
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
