<template>
  <div class="container is-max-desktop" v-if="session.user">
    <div class="modal" :class="{ 'is-active': modalActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="field">
          <div class="control">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">New Exercise</p>
                <div class="card-header-icon">
                  <button
                    @click="
                      modalActive = !modalActive;
                      inputText = '';
                    "
                    class="delete icon is-large is-active"
                  ></button>
                </div>
              </header>
              <input
                class="input card-content"
                placeholder="Exercise Description"
                type="text"
                v-model="inputText"
              />
            </div>
          </div>
          <button
            @click="
              modalActive = !modalActive;
              createExercise(session.user!, prettyDate(new Date()), inputText);
              inputText = '';
            "
            type="submit"
            class="button is-large is-fullwidth is-rounded is-link"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div
      class="button is-large is-fullwidth is-rounded is-link"
      @click="modalActive = !modalActive"
    >
      Add workout
    </div>

    <body
      class="card-content box"
      v-for="exercise in exercises.slice().reverse()"
    >
      <ExerciseComponent :exercise="exercise" />
      <footer class="card-footer">
        <a @click="removeExercise(exercise?._id)" class="card-footer-item"
          >Delete</a
        >
      </footer>
    </body>
  </div>
</template>

<script setup lang="ts">
import ExerciseComponent from "../components/Exercise.vue";
import {
  type Exercise,
  userExercises,
  addExercise,
  deleteExercise,
  updateExercise,
} from "../stores/exercises";
import session from "../stores/session";
import { reactive, ref } from "vue";
import type { User } from "@/stores/users";

const exercises = reactive([] as Exercise[]);
if (session.user) {
  userExercises(session.user._id).then((x) => {
    if (x.list) {
      const list = x.list;
      console.log(list);
      exercises.splice(0, exercises.length);
      exercises.push(...list);
    }
  });
}

function removeExercise(id: string) {
  deleteExercise(id).then((x) => {
    if (x) {
      const index = exercises.findIndex((y) => y._id == id);
      exercises.splice(index, 1);
    }
  });
}

function createExercise(user: User, date: string, description: string) {
  addExercise(user, date, description).then((x) => {
    if (x) {
      exercises.push(x);
    }
  });
}

function prettyDate(date: Date) {
  return (
    (date.getHours() % 12) +
    ":" +
    date.getMinutes() +
    " " +
    (date.getMonth() + 1) +
    "/" +
    date.getUTCDate() +
    "/" +
    date.getFullYear()
  );
}
const inputText = "";
let modalActive = ref(false);
</script>

<style scoped>
.button {
  margin: 15px 0px;
}
</style>
