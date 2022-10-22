<template>
  <div class="container is-max-desktop">
    <div class="modal" :class="{ 'is-active': modalActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">New Workout</p>
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
                placeholder="Workout Description"
                type="text"
                v-model="inputText"
              />
            </div>
          </div>
          <button
            @click="
              modalActive = !modalActive;
              addWorkout(session.user!, prettyDate(new Date()), inputText);
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
    <div v-for="workout in Workouts">
      <Exercises
        v-if="workout.user == session.user"
        :edit="true"
        :workout="workout"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Exercises from "../components/Exercise.vue";
import Workouts, { addWorkout} from "../stores/workouts";
import session from "../stores/session";
import { ref } from "vue";

function prettyDate(date: Date) {
  return (
    (date.getHours() % 12) +
    ":" +
    date.getMinutes() +
    " " +
    (date.getMonth()+1) +
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
