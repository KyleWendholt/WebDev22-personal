<template>
  <div class="container is-max-desktop">
    <header>
      <div class="card">
        <div class="media">
          <figure class="image">
            <img :src="session.user!.profilePic" alt="User image" />
          </figure>
          <div class="card-content">
            <h1 class="title">Username:</h1>
            <h2 class="subtitle">@{{ session.user?.username }}</h2>
          </div>
        </div>
      </div>
    </header>

    <div v-for="exercise in exercises">
      <Exercise
        v-if="(exercise.userID == session.user?.id)"
        :edit="false"
        :exercise="exercise"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import session from "../stores/session";
import { reactive } from "vue";
import { type Exercise, getExercises } from "@/stores/exercises";

const exercises = reactive([] as Exercise[]);
getExercises().then((x) => {
  exercises.push(...x.list);
});
</script>

<style scoped></style>
