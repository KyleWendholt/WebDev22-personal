<template>
  <div class="container is-max-desktop">
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
import { reactive } from "vue";
import { type Exercise, getExercises } from "@/stores/exercises";

const exercises = reactive([] as Exercise[]);
getExercises().then((x) => {
  if (x.list) {
      const list = x.list;
      console.log(list);
      exercises.splice(0, exercises.length);
      exercises.push(...list);
    }
});
</script>

<style scoped></style>
