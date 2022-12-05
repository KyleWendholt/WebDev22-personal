<template>
  <div class="container is-max-desktop">
    <Exercises v-for="exercise in exercises" :edit="false" :exercise="exercise" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { type Exercise, getExercises } from "@/stores/exercises";

const exercises = reactive([] as Exercise[]);
getExercises().then((x) => {
  exercises.push(...x.list);
});

</script>

<style scoped></style>
