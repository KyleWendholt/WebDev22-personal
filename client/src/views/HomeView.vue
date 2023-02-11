<template>
  <div class="container is-max-desktop">
    <div class="field has-addons">
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="searchInput"
          placeholder="Search for user"
        />
      </div>
      <div class="control">
        <a class="button is-info" @click="updateUser(searchInput)"> Search </a>
      </div>
    </div>

    <div class="dropdown-menu" :class="{ 'is-active': searchInput }">
      <div class="dropdown-content">
        <div class="dropdown-item" v-for="user in users">
          <a
            href="#"
            class="dropdown-item"
            @click="searchInput = user.username"
          >
            {{ user.username }}
          </a>
        </div>
      </div>
    </div>
    <div
      class="card-content box"
      v-for="exercise in exercises.slice().reverse()"
    >
      <ExerciseComponent :exercise="exercise" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ExerciseComponent from "../components/Exercise.vue";
import { reactive, ref } from "vue";
import { type Exercise, getExercises, userExercises } from "@/stores/exercises";
import { autocompleteUsers, type User, getUser } from "@/stores/users";
import type { ListEnvelope } from "@/stores/users";

let searchInput = ref("");

function updateUser(searchInput: string) {
  getUser(searchInput).then((x) => {
    if (x) {
      userExercises(x._id).then((x) => {
        if (x && x.total > 0) {
          updateExercises(x);
        }
      });
    } else {
      autocompleteUsers(searchInput).then((x) => {
        if (x && x.total > 0) {
          let users = x.list;
          const exercises: ListEnvelope<Exercise> = { total: 0, list: [] };
          for (let i = 0; i < users.length; i++) {
            userExercises(users[i]._id).then((x) => {
              if (x && x.total > 0) {
                exercises.total += x.total;
                exercises.list.push(...x.list);
              }
            });
          }
          updateExercises(exercises);
        }
      });
    }
  });
}

const users = reactive([] as User[]);

autocompleteUsers(searchInput.value).then((x) => {
  if (x && x.total > 0) {
    users.splice(0, users.length);
    users.push(...x.list);
  }
});

const exercises = reactive([] as Exercise[]);
getExercises().then((x) => {
  if (x && x.total > 0) {
    updateExercises(x);
  }
});

function updateExercises(x: ListEnvelope<Exercise>) {
  const list = x.list;
  console.log(list);
  exercises.splice(0, exercises.length);
  exercises.push(...list);
}
</script>

<style scoped></style>
